# CLAUDE.md — Fitness World Studios

Conventions for building this site in Claude Code. Read this first, every session.
The homepage is fully built as the reference implementation — match its patterns.

## Project

- **Stack:** Vite + React (JSX) + React Router + Tailwind v3. Deploy target: Vercel.
- **Run:** `npm install` → `npm run dev` (preview) → `npm run build`.
- **Goal:** A high-end, multi-location fitness + health brand site. Not a generic gym template.
- **Language:** All copy is German, informal "du/dein" voice.

## Source of truth

- **Content:** `content/pages/*.md` — real German copy per route. Use it verbatim. Never Lorem Ipsum.
- **Routes:** `content/sitemap.json` (also mirrored in `src/data/site.js`).
- **Original brief:** `content/01_DESIGN_SYSTEM.md`, `03_COMPONENT_SPEC.md`, `04_IMPLEMENTATION_NOTES.md`.

## Non-negotiables

1. Accent color is exactly **`#1A91D5`** (`fw-blue`). No neon green. No other accent.
2. Use the **real logo** `public/logo/fitness-world-logo.svg` (rendered inline via `src/components/Logo.jsx`). Never redraw or recolor it.
3. Blue is used **sparingly**: CTAs, eyebrows, icons, lines, hover, active states. Surfaces stay navy/white.
4. Mobile-first. The sticky `Probetraining` CTA bar (`.mcta`) shows on mobile.
5. No dead links — every route in `src/data/site.js` resolves (unbuilt ones render `Placeholder`).
6. Accessibility: real buttons/links, visible focus, labelled forms, ARIA on accordions, one `<h1>` per page.
7. SEO per page: set `document.title` + a meta description, semantic `<section>`s.

## Design tokens (wired into Tailwind — see `tailwind.config.js`)

- Colors: `fw-blue`, `fw-blue-hover` (#1479B3), `navy-900/800/700`, `offwhite`, `ink`, `muted`, `line`.
- Fonts: `font-display` (Anton, uppercase headlines) · `font-body` (Manrope).
- Radius: `rounded-s/m/l` (10/18/28px). Max width: `max-w-site` (1240px).
- CSS variables for the same tokens live in `src/index.css` (`--fw-blue`, `--navy-900`, …).

## Typography rules

- Headlines: Anton, UPPERCASE, tight line-height, **one keyword in `.blue`** per headline.
- Small uppercase **eyebrow** label (blue, letter-spaced) above each section headline.
- Body: Manrope. Clear, direct, trustworthy — not salesy.

## Tonality (from the brief)

- Write like: "Trainiere, wann es in deinen Alltag passt." / "Wir holen dich dort ab, wo du stehst."
- Never write: "Werde die beste Version deiner selbst", "No pain no gain", "Premium Lifestyle Experience".

## Component map (`src/components/`)

`Header` · `Footer` · `Button` (+`TextLink`) · `Marquee` · `Reveal` (scroll-in) ·
`Stat` (count-up) · `Icon` (+`Star`) · `ImagePlaceholder` · `LocationCard` ·
`ServiceCard` · `TestimonialCard` · `Logo`.

Reuse these. Add new ones in the same style (component CSS classes live in `src/index.css`
under `@layer components`; use Tailwind tokens for one-off layout).

## Images

No real photos yet. `ImagePlaceholder` renders a textured panel tagged with the intended
path (e.g. `studios/holdorf-card.jpg`). When real assets arrive, drop them in `public/images/...`
matching the paths in the content files and swap `ImagePlaceholder` for `<img>` with alt text.

## How to build a new page

1. Read its `content/pages/NN_*.md`.
2. Replace the route's `Placeholder` in `src/App.jsx` with a real page in `src/pages/`.
3. Compose from existing components; follow the section rhythm of `Home.jsx`.
4. Wrap sections in `<Reveal>`; set `document.title` + description.
5. Build the studio detail page ONCE as a reusable template, then feed it Holdorf/Goldenstedt/Twistringen/Vechta data.

## Build order (priority)

Home ✅ → Studio detail template (4 studios) → Probetraining (lead form) →
Mitgliedschaft (pricing) → Kurse / Reha / Personal Training / Boxen →
Team / Jobs / Blog / Kontakt → Legal templates.

See `tasks/todo.md` for the live checklist.
