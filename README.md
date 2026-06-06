# Fitness World Studios — Web Starter

Vite + React + Tailwind starter for the Fitness World Studios relaunch.
The **homepage is fully built**; the design system is wired up so the remaining
routes are a templating job. Built to carry into a Claude Code workflow.

## Quick start

```bash
npm install
npm run dev      # local preview with hot reload
npm run build    # production build → dist/
npm run preview  # serve the build
```

Requires Node 18+ (built on Node 22).

## What's inside

```
src/
  components/    reusable UI (Header, Footer, cards, Logo, Reveal, Stat, ...)
  pages/         Home.jsx (built) + Placeholder.jsx (unbuilt routes)
  data/site.js   nav, full route table, homepage content
  index.css      design tokens (CSS vars) + component classes
content/         the original German copy (pages/*.md), tokens, sitemap, brief
public/logo/     the real logo (svg + png)
CLAUDE.md        design + project conventions — read before building
tasks/todo.md    build checklist for the remaining 18 routes
tailwind.config.js   design tokens wired into Tailwind
vercel.json      SPA rewrite for deploys
```

## Design system

- Accent: `#1A91D5` (`fw-blue`) — used sparingly. No neon green.
- Display font: **Anton** (uppercase headlines). Body: **Manrope**.
- Tokens are in both `tailwind.config.js` (utilities like `bg-navy-900`, `text-fw-blue`,
  `font-display`) and `src/index.css` (CSS variables + `@layer components` classes).

## Deploy (Vercel)

Push to a repo, import on Vercel. Framework preset: **Vite**. `vercel.json` already
handles SPA routing so deep links (`/holdorf`, `/mitgliedschaft`, …) resolve.

## Next steps

See `CLAUDE.md` → "Build order" and `tasks/todo.md`. The studio-detail page should be
built once as a reusable template and fed each location's data.
