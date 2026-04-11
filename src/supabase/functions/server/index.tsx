import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-73fb5d31/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-73fb5d31/contact", async (c) => {
  try {
    const { name, email, message } = await c.req.json();

    // Validate input
    if (!name || !email || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not found in environment variables");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Send email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "NotlandDesign <onboarding@resend.dev>", // You'll change this after verifying your domain
        to: ["marinosve@gmail.com"],
        reply_to: email,
        subject: `New contact form submission from ${name}`,
        html: `
          <h2>New message from NotlandDesign portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>This message was sent via the contact form on your portfolio website.</small></p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Resend API error:", errorData);
      return c.json({ error: "Failed to send email" }, 500);
    }

    const data = await response.json();
    console.log("Email sent successfully:", data);

    return c.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in contact endpoint:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);