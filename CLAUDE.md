# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Public website for the **Florida Space Innovation Center (FSIC)**, a regional workforce and innovation initiative based in New Smyrna Beach, Southeast Volusia County, Florida. Built by Barrel & Pixel. It will replace the current Wix site at https://www.fsic.space.

- **Stack:** Astro 5 (static) + Tailwind CSS v4 (via `@tailwindcss/vite`), TypeScript.
- **Hosting:** GitHub Pages under the `/fsic` base path (`astro.config.mjs`), deployed by `.github/workflows/deploy.yml` on push to `main`.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321/fsic
npm run build     # static build to dist/ (run before finishing any change)
npm run preview   # serve the built site
```

There is no linter or test suite. `npm run build` is the check.

## Layout

```
src/pages/           One .astro file per route. index.astro and model.astro are built out; the rest use <ComingSoon>
src/components/      Button, CoastlineMap, Header, Footer, ComingSoon, RunningHead
src/layouts/         BaseLayout.astro (meta tags, font loading, header and footer)
src/styles/global.css  Design tokens (@theme), base styles, arc animation
src/content/copy/    Copy deck: one Markdown file per page (see below)
docs/                Project docs 00–09 (IA, content guidelines, site audit, copy-deck workflow)
DESIGN.md            Visual design direction: source of truth for design decisions
mnt/data/            Source PDFs (Master Plan, Overview). Not deployed
```

## Rules

### Design
Read **`DESIGN.md`** before changing any UI. In short:
- Every page sits on one 12-column grid: framing in cols 1–4, detail in cols 5–12, sections opened by a `RunningHead` on a heavy rule. See DESIGN.md "Grid".
- The coastline and launch arc is the only signature element and the only automatic animation.
- Orange means the space industry. Lagoon green means the community. Don't use either as decoration.
- Never put white text on orange, and never use orange text on light backgrounds (contrast).
- Barlow Semi Condensed for headings (`font-display`), Source Serif 4 for reading text (the body default), Archivo for UI (`font-sans`: nav, buttons, captions, labels, data). No all-caps eyebrow labels, no fade-in on scroll, no identical shadowed cards, no chips or pills.

### Copy
- Wording comes from `src/content/copy/<page>.md`. Write and approve copy there first, then build it into the page. The workflow and markers (`> Source`, `⚠ Review`, `[TODO]`) are in `docs/09-copy-deck.md`.
- Follow `docs/03-content-guidelines.md`: institutional tone, no hype words, no exclamation marks.
- **Economic figures must match the Master Plan exactly, shown as ranges** ("$10.2–$12.4 billion"), never only the upper bound.
- Don't invent partners, quotes, testimonials, logos or statistics. When unsure, leave it out.
- Open content conflicts (development figures, Deering Park naming, phase count, unsourced claims) are listed in `docs/08-current-site-audit.md` §3 and `docs/07-open-questions.md`. Don't settle them in copy without the user.

### Code
- **Base path:** internal links must include `import.meta.env.BASE_URL` (currently `/fsic`, no trailing slash). `Button` handles this for hrefs starting with `/`. Elsewhere, write `` `${base}/path` ``. A bare `/path` breaks on GitHub Pages.
- **CSS layers:** base element styles in `global.css` live inside `@layer base`. Keep them there. Styles outside a layer override Tailwind utilities.
- Use the theme tokens (`bg-night`, `text-lagoon`, `bg-salt`…) rather than raw hex values.
- Header nav highlighting uses the `isActive()` helper in `Header.astro`. Home matches only itself.
- The `<html>` element gets a `js` class from an inline script in `BaseLayout`. Use it to gate JS-only states so the page still works without JS.

## Before finishing a change
1. `npm run build` succeeds.
2. Check the page at desktop width and at 375px. Nothing scrolls horizontally, and keyboard focus is visible.
3. If copy changed, update the copy file's status, and the status table in `docs/09-copy-deck.md` if needed.
