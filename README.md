# Florida Space Innovation Center — Website

Public website for the Florida Space Innovation Center (FSIC), a coordinated regional platform strengthening workforce, innovation, and economic growth for Southeast Volusia and the Space Coast. It will replace the current Wix site at https://www.fsic.space.

**Built by:** Barrel & Pixel
**Launch date:** to be set (the original May 25, 2026 target has passed; see `docs/06-launch-plan.md`)

## Tech Stack

- **Framework:** [Astro](https://astro.build/) 5 with TypeScript
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`), design tokens in `src/styles/global.css`
- **Output:** Static HTML (SSG)
- **Hosting:** GitHub Pages under the `/fsic` base path, deployed by `.github/workflows/deploy.yml` on push to `main`. Production hosting and domain are still open (`docs/07-open-questions.md`).

## Getting Started

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:4321/fsic
npm run build        # static build to dist/
npm run preview      # serve the built site
npm run check-links  # build, then check every internal link and anchor
```

There is no linter or test suite. `npm run build` and `npm run check-links` are the checks.

Internal links must include the base path (`import.meta.env.BASE_URL`). `Button` adds it for hrefs starting with `/`.

## Project Structure

```
/
├── DESIGN.md                    # Visual design direction (source of truth for design)
├── CLAUDE.md                    # Working rules for this repo
├── docs/                        # Project documentation (00–09, listed below)
├── mnt/data/                    # Source PDFs (Master Plan, Overview). Not deployed
├── public/
│   ├── favicon.svg, favicon.ico
│   └── images/                  # Logo (light and reverse), campus concept rendering
├── scripts/
│   └── check-links.mjs          # Run via `npm run check-links`
└── src/
    ├── assets/                  # Images processed by astro:assets (homepage hero photo)
    ├── components/
    │   ├── Section, Grid, Row, DashList, PageHero, SectionBar, RunningHead   # grid components
    │   ├── Button, CoastlineMap (not currently used), Header, Footer
    │   └── ComingSoon           # placeholder for unbuilt pages
    ├── content/copy/            # Copy deck: one Markdown file per page (docs/09)
    ├── content/news/            # Press releases, one Markdown file each (as published); images/ holds their graphics
    ├── lib/news.ts              # Press release helpers (sorting, dates, excerpts)
    ├── lib/nav.ts               # Site navigation, shared by Header and Footer
    ├── layouts/BaseLayout.astro # Meta tags, fonts, header and footer
    ├── pages/                   # One .astro file per route; pages/news/ holds the list and [slug] pages
    └── styles/global.css        # Design tokens (@theme), base styles, arc animation
```

## Current Status

**Built:** Home (`/`), The FSIC Model (`/model`), Economic Impact (`/economic-impact`), Phased Deployment (`/deployment`), Governance & Transparency (`/governance`), Partnership & Funding (`/partnership-funding`), The Strategic Moment (`/strategic-moment`), Programs & Facilities (`/programs-facilities`), FAQ (`/faq`), News & Media (`/news`, one page per press release), Contact (`/contact`, email links by topic; no form yet).

**Coming Soon stub:** Long-Term Vision. It uses `<ComingSoon>` until its copy is ready.

**Proposed pages** (copy drafted, not yet in the IA): Leadership.

Copy status for every page is tracked in `docs/09-copy-deck.md`. Open content decisions are in `docs/07-open-questions.md` and `docs/08-current-site-audit.md` §3.

## Design

See `DESIGN.md` for colors, type (Barlow Semi Condensed, Source Serif 4, Archivo), the 12-column grid, the interior page template and the component list. `docs/04-design-system.md` holds the earlier specs and is superseded where they disagree.

## Documentation

- **00** — Project overview and scope
- **01** — Source material extracts with PDF page references
- **02** — Information architecture and sitemap
- **03** — Content and tone guidelines
- **04** — Design system (earlier specs; superseded in part by `DESIGN.md`)
- **05** — SEO and accessibility requirements
- **06** — Launch plan and QA checklist
- **07** — Open questions requiring stakeholder input
- **08** — Audit of the current site (fsic.space) and content conflicts
- **09** — Copy deck workflow
