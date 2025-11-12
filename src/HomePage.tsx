import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
