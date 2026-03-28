# NotlandDesign

Mari Svennevik Notland's personal portfolio and CV site. Public-facing — presentation and polish matter.

## Stack

- React 18 + Vite 5
- TypeScript (strict mode)
- React Router v7 (client-side routing)
- Plain CSS with CSS custom properties — no Tailwind, no CSS-in-JS
- No backend, no CMS, no database — fully static

## Project structure

```
src/
  pages/          # About, Contact, Projects, CV (+ empty CV sub-pages)
  components/     # CVUtils, CVParts, CVExtraParts (mostly empty placeholders)
  App.tsx         # Home/hero page
  App.css         # Main stylesheet + color palette
  Layout.tsx      # Header/footer wrapper + LanguageContext provider
  router.tsx      # React Router setup
  index.css       # Global styles
public/
  cv.pdf          # Downloadable CV
  cv-profile.jpg
  favicon.svg     # Flower icon used in animations
```

## Routing

| Path | Component |
|---|---|
| `/` | App.tsx (hero) |
| `/about` | About.tsx |
| `/projects` | Projects.tsx |
| `/contact` | Contact.tsx |
| `/cv` | CV.tsx |

Layout wraps all routes — header and footer persist across pages.

## Styling conventions

- CSS custom properties for the color palette (e.g. `--accent-green: #5a7d6c`)
- Earthy green/neutral palette — don't introduce bright or clashing colors
- Keyframe animations: `emoji-bounce`, `hero-pop`, `logo-spin`
- Fredoka One font for headings
- No utility framework — write plain CSS, keep it consistent with existing style

## Localization

- Custom `LanguageContext` in `Layout.tsx` toggles between `"en"` and `"no"` (Norwegian)
- Pattern: `lang === "no" ? "Norsk tekst" : "English text"` inline in JSX
- All new user-visible text must have both language variants

## Content

- All content is hardcoded in components — no CMS
- CV data lives inline in `CV.tsx` with a tab interface (Experience, Education, Positions, Skills)
- Contact is just a `mailto:` link — no form backend
- Downloadable CV is `public/cv.pdf` — update the file to update the CV

## Deployment

Not yet configured. Vite builds to `dist/`. Ready to deploy to Vercel, Netlify, or GitHub Pages with no extra config needed.

## Do not

- Use Tailwind or any CSS framework — keep plain CSS
- Add a backend or API calls — this is a static site
- Remove the language toggle — bilingual support is intentional
- Hardcode colors outside CSS variables
