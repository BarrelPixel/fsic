# 00 — Project Overview

## Project Name
Florida Space Innovation Center (FSIC) — Public Website

## Client
Florida Space Innovation Center / Barrel & Pixel

## Launch Date
**May 25, 2026**

## Purpose
A production-quality, static-first institutional website that communicates FSIC's mission, model, economic impact, phased deployment plan, and long-term vision to stakeholders including employers, university partners, policymakers, workforce organizations, and the general public.

## Scope
FSIC is a long-horizon initiative spanning a 2026–2031 master plan with a 2032–2040 extended vision. The website must reflect this institutional scale while launching with a focused initial page set.

### Phase 1 (Current — Launch)
- Built (November 2026): Home, The FSIC Model, Economic Impact, Phased Deployment, Governance & Transparency, Partnership & Funding, The Strategic Moment, Programs & Facilities, FAQ, News & Media, Contact (no form yet)
- Route stubs (`<ComingSoon>`) for the remaining pages
- Design system (`DESIGN.md`) and the grid component library (`src/components/`)
- Full documentation suite

### Phase 2 (Post-Launch)
- Build out all interior pages defined in the information architecture
- Integrate analytics and form handling
- Add dynamic content (dashboards, events, news)

## Tech Stack
- **Framework:** Astro (static-first, TypeScript)
- **Styling:** Tailwind CSS v4 + CSS custom properties for design tokens
- **Hosting:** GitHub Pages under the `/fsic` base path for now (`.github/workflows/deploy.yml`). Production hosting and domain are open (see `07-open-questions.md`)
- **Content:** Markdown-based copy files

## Brand Palette
The brand colors are navy `#163256` and orange `#E37A2D`. The full palette, with the meaning of each color (orange for the space industry, lagoon green for the community), is in `/DESIGN.md` ("Color").

## Tone
Institutional, measured, credible. No startup hype. Data-forward, heavy whitespace, clean typography.
