# Neha Pal — Portfolio

Personal portfolio website for **Neha Pal**, full-stack developer in Mumbai, India. Single-page scrolling site with smooth anchor navigation, dark theme, and fade-up scroll animations.

## Tech stack

- [React](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com) (v4, via `@tailwindcss/vite`)
- [Framer Motion](https://motion.dev) — scroll-reveal animations and expand/collapse
- [lucide-react](https://lucide.dev) — icons
- No backend — contact form posts to Formspree

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# lint
npm run lint

# production build (outputs to dist/)
npm run build

# preview the production build locally
npm run preview
```

## Project structure

```
public/
  favicon.svg        favicon (SVG monogram)
  og-image.png       OpenGraph preview image
  resume.pdf         resume file — replace with your real resume
  headshot.jpg       portrait — replace with your real photo (3:4, min 800px tall)
src/
  components/        Header, Hero, About, Skills, Experience, Projects, Education, Contact, Footer + shared Reveal / SectionHeading
  data/portfolio.js  all site content lives here — edit to update the site
  App.jsx            page assembly
  index.css          Tailwind theme tokens and base styles
index.html           meta tags, OpenGraph, fonts
```

Most content edits can be made in one place: `src/data/portfolio.js`.

## Deployment (Vercel)

This deploys as a static build.

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), **Import** the repo. Vercel auto-detects Vite:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
3. Click **Deploy**. Every push to the repo's main branch redeploys automatically.

## Before you go live

- **Formspree** — create a form at https://formspree.io, then replace the placeholder in `src/components/Contact.jsx`:
  ```js
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id' // replace this
  ```
- **LinkedIn URL** — already set in `src/data/portfolio.js` (`profile.linkedin`); update if your profile changes.
- **Resume** — drop your real PDF at `public/resume.pdf` (the `Download resume` button links to `/resume.pdf`).
- **Headshot** — the hero and contact sections load `public/headshot.jpg` (a gray placeholder is committed there now). Export your photo as a **3:4 portrait crop, minimum 800px tall** (e.g. 600×800) and overwrite `public/headshot.jpg`. The full-colour image is desaturated to grayscale in CSS and tinted with the theme tones, so a well-lit, high-contrast portrait works best.
- **OpenGraph** — optional: replace `public/og-image.png` and the `og:url` / `twitter:image` URLs in `index.html` once you know your production domain.
- **Security** — when you add your Formspree form, Vercel recommends setting `POST` domain restrictions in Formspree and, if you want the build-safety check, the `VITE_FORMSPREE_ENDPOINT` env var.

## Design tokens

Defined in `src/index.css` under `@theme`:

| Token      | Value      | Use                                  |
| ---------- | ---------- | ------------------------------------ |
| `bg`       | `#0b0b0f`  | page background                      |
| `surface`  | `#12121a`  | cards, form fields                   |
| `ink`      | `#ededf2`  | primary text                         |
| `muted`    | `#9090a0`  | secondary text                       |
| `accent`   | `#8a7cff`  | indigo/violet accent (links, hovers) |
| `line`     | white 8%   | hairline borders                     |

Body font is Inter; headings use Space Grotesk.