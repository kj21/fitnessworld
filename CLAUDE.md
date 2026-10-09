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
- **CMS:** Sanity (`studio/`). Editors change content there; `src/data/site.js` is only the fallback.
  - **Studios are Sanity-only.** `useStudios()` in `src/lib/studios.js` feeds the homepage
    cards, header nav, footer, Probetraining select and the studio pages. When Sanity
    answers, its list is used as-is — the `locations`/`studioData` fallback is never merged
    in. Studio pages are one dynamic route `/:slug` (`StudioRoute.jsx`); never add static
    studio routes. `comingSoon` studios show "Demnächst" everywhere and don't count.
  - Homepage copy comes from the `homePage` singleton ("Startseite"), quotes from
    `testimonial`. Every Sanity field is optional — `mergeHomePage()` in `src/lib/home.js`
    layers it over `homeContent()`. Headline convention: `\n` = new line, `*word*` = blue.
  - Studio count ("3 Standorte") = published studios that are not `comingSoon`.
  - Kurse, Kursplan, Mitgliedschaft-Seite (benefits + FAQ), Unternehmen & Impressum and
    Rechtstexte come from Sanity via the hooks in `src/lib/content.js`. Lists (courses,
    schedule) are Sanity-authoritative like studios; singletons merge field-by-field
    over the site.js fallback. `{anzahl}` in Startseite / Mitgliedschaft text = open studios.
  - AOK courses are discontinued — don't reintroduce AOK copy.
  - **Every page's copy lives in Sanity.** Leistungs-Seiten (Reha-Sport, Boxen,
    Personal Training) are built from re-orderable section blocks (`servicePage`,
    rendered by `src/components/Sections.jsx`); the remaining hero / intro / FAQ /
    CTA text is `pageCopy`; the magazine is `blogPost` with `/blog/:slug` articles.
    Fallbacks for all of it live in `src/data/pages.js` — keep them in sync when
    changing a page, they are what renders if Sanity is empty or unreachable.
  - Don't hardcode new page copy. Add a field or a section block instead.

## Positioning (Rebrand Okt 2026) — "Blue Access System"

- Claim: **„Training nach deinem Lifestyle."** Hero: `TRAINING NACH *DEINEM LIFESTYLE.*`
- The site sells a flexible training *system*, not a regional community gym:
  24/7 Zugang · persönliche Betreuung · Reha-Sport · Kurse & Zirkel · Fighter World · Wellness.
- **Blue Path** is the recurring brand device: thin blue route lines, pins, numbered
  steps and card connectors (`.bp-*`, `.access-bar`, `.decide-card`, `.finder-card`,
  `.panel__frame`, `.entry` in `src/index.css`). Use it to connect sections instead of
  adding new decorative styles.
- Never write: „Stärker. Gesünder. Gemeinsam.", „Vier Standorte. Eine Community.",
  „Fitness ist besser gemeinsam.", „Ein Preis. X Studios.", „Training, das in dein Leben
  passt." or generic community-gym wording ("Szene", "deine Crew", "Gym Community").
- Preferred wording: flexibel · betreut · dein Einstieg · dein Rhythmus · dein Standort ·
  gesundheitlich begleitet · klarer Trainingsweg · 24/7 Zugang · Trainerzeiten · Fighter World.
- **24/7 access is never staffed service.** Every place that mentions 24/7 must keep the
  Trainerzeiten distinction visible (homepage note, `/24-7-training`, studio pages).
- Boxen is branded **Fighter World** (`/fighter-world`); `/kurse/boxen` and `/boxen` redirect.

## Non-negotiables

1. Accent color is exactly **`#1A91D5`** (`fw-blue`). No neon green. No other accent.
2. Use the **real logo** `public/logo/fitness-world-logo.svg` (rendered inline via `src/components/Logo.jsx`). Never redraw it. The "F" is white (client request, Sept 2026) because the logo always sits on navy.
3. Blue is used **sparingly**: CTAs, eyebrows, icons, lines, hover, active states. Surfaces stay navy/white.
4. Mobile-first. The sticky `Probetraining` CTA bar (`.mcta`) shows on mobile.
5. No dead links — every route in `src/data/site.js` resolves (unbuilt ones render `Placeholder`); studio pages resolve via `/:slug`.
6. Accessibility: real buttons/links, visible focus, labelled forms, ARIA on accordions, one `<h1>` per page.
7. SEO per page: set `document.title` + a meta description, semantic `<section>`s.

## Design tokens (wired into Tailwind — see `tailwind.config.js`)

- Colors: `fw-blue`, `fw-blue-hover` (#1479B3), `navy-900/800/700`, `offwhite`, `ink`, `muted`, `line`.
- Fonts: `font-display` (**Oswald**, uppercase headlines, weight 300 for display sizes and 400 for small labels) · `font-body` (Manrope). Anton was replaced in Oct 2026 — headlines stay condensed but thin.
- Radius: `rounded-s/m/l` (4/8/14px — deliberately tight). Pills (50px) stay round for badges and tags. Max width: `max-w-site` (1240px).
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
