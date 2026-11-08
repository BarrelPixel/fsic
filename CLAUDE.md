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
npm run check-links  # build, then check every internal link and anchor (fails on broken ones)
```

There is no linter or test suite. `npm run build` and `npm run check-links` are the checks.

## Layout

```
src/pages/           One .astro file per route. index, model, economic-impact, deployment, governance, partnership-funding, strategic-moment, programs-facilities, faq, news and contact are built out; long-term-vision uses <ComingSoon>
src/components/      Grid components (Section, Grid, Row, DashList, PageHero, SectionBar, RunningHead),
                     Button, Header, Footer, Disclosure, ProgramList, HeroIndex, Closing, ComingSoon
src/layouts/         BaseLayout.astro (meta tags, font loading, header and footer)
src/styles/global.css  Design tokens (@theme), base styles, arc animation
src/content/copy/    Copy deck: one Markdown file per page (see below)
src/content/news/    Press releases, one Markdown file each, wording as published (built into /news and /news/<slug>);
                     images/ holds the graphic published with each release
src/lib/news.ts      Press release helpers
src/lib/nav.ts       Site navigation (groups and links), shared by Header and Footer
src/lib/site.ts      EMAIL, mailto(), SOCIAL_LINKS: use these, don't retype the address or links
src/lib/programs.ts  The Master Plan's program portfolio (Model and Programs & Facilities pages)
src/lib/format.ts    pad2() for 01, 02… numbering
docs/                Project docs 00–09 (IA, content guidelines, site audit, copy-deck workflow)
DESIGN.md            Visual design direction: source of truth for design decisions
mnt/data/            Source PDFs (Master Plan, Overview). Not deployed
scripts/             check-links.mjs (run via `npm run check-links`)
```

## Rules

### Design
Read **`DESIGN.md`** before changing any UI. In short:
- Every page sits on one 12-column grid: framing in cols 1–4, detail in cols 5–12. Build sections from the grid components (`Section`, `Grid`, `Row`, `DashList`), and interior pages from the template in DESIGN.md "Interior page template" (`PageHero` first; `src/pages/model.astro` is the reference). Don't hand-write grid classes.
- The homepage hero photo (`src/assets/fsic-hero.png`, a launch plume seen from the dunes) is the only signature element (DESIGN.md "Signature element" and "Imagery"). The site has no automatic animations.
- Orange means the space industry. Lagoon green means the community. Don't use either as decoration.
- Never put white text on the brand orange, and never use orange text on light backgrounds (contrast). Primary buttons are white on `orange-deep` (the `Button` component handles this).
- Barlow Semi Condensed for headings (`font-display`), Source Serif 4 for reading text (the body default), Archivo for UI (`font-sans`: nav, buttons, captions, labels, data). No all-caps eyebrow labels, no fade-in on scroll, no identical shadowed cards, no chips or pills.

### Copy
- Wording comes from `src/content/copy/<page>.md`. Press releases are the exception: each is a file in `src/content/news/`, kept as published. Write and approve copy there first, then build it into the page. The workflow and markers (`> Source`, `⚠ Review`, `[TODO]`) are in `docs/09-copy-deck.md`.
- Follow `docs/03-content-guidelines.md`: institutional tone, no hype words, no exclamation marks.
- **Economic figures must match the Master Plan exactly, shown as ranges** ("$10.2–$12.4 billion"), never only the upper bound.
- Don't invent partners, quotes, testimonials, logos or statistics. When unsure, leave it out.
- Don't name a specific campus site or the development the Master Plan proposes for it, anywhere on the site or in the docs (decided November 2026; `docs/08-current-site-audit.md` §3.3). Say "Southeast Volusia" or "the region".
- Open content conflicts (development figures, unsourced claims, which economic scenario the headline figures describe) are listed in `docs/08-current-site-audit.md` §3 and `docs/07-open-questions.md`. Don't settle them in copy without the user.

### Code
- **Base path:** internal links must include `import.meta.env.BASE_URL` (currently `/fsic`, no trailing slash). `Button` handles this for hrefs starting with `/`. Elsewhere, write `` `${base}/path` ``. A bare `/path` breaks on GitHub Pages.
- **CSS layers:** base element styles in `global.css` live inside `@layer base`. Keep them there. Styles outside a layer override Tailwind utilities.
- Use the theme tokens (`bg-night`, `text-lagoon`, `border-rule`…) rather than raw hex values, and the type-scale classes (`text-statement`, `text-lead`, `text-label`, `text-caption`) and link classes (`link`, `link-on-dark`, `links-in`) rather than re-typing their Tailwind classes (DESIGN.md "Type scale").
- **Navigation** lives in `src/lib/nav.ts`; Header and Footer both read it, so change menus there, not in the components. Pages are grouped by question in two dropdowns (Why FSIC, The Model), with plain links for the rest; "Get Involved" is the Partnership & Funding page. Each page appears once in the menu. A page still on `<ComingSoon>` has `built: false` and stays out of both menus; set it to `true` (or remove the flag) when the page ships. Header highlighting uses `isActive()` in `Header.astro` (Home matches only itself); a group is highlighted when one of its pages is current.
- **Press releases:** add `src/content/news/<YYYY-MM-DD>-<slug>.md` with `title` and `date`. If the release was published with a graphic, put it in `src/content/news/images/` and set `image` and `imageAlt` (required with `image`; transcribe the words in the graphic). The release page uses it as the share image. If `npm run dev` is running when you add a release with an image, restart it: until then the dev server shows `LocalImageUsedWrongly` for that image (the build is fine).
- `BaseLayout` takes an optional `image` (a built image `src`, e.g. from `getImage()`) for `og:image` and `twitter:image`. Pages without one have no share image yet.
- The `<html>` element gets a `js` class from an inline script in `BaseLayout`. Use it to gate JS-only states so the page still works without JS.

## Before finishing a change
1. `npm run build` succeeds, and `npm run check-links` reports no broken links.
2. Check the page at desktop width and at 375px. Nothing scrolls horizontally, and keyboard focus is visible.
3. If copy changed, update the copy file's status, and the status table in `docs/09-copy-deck.md` if needed.
