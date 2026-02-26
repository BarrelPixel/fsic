# Florida Space Innovation Center — Website

Public website for the Florida Space Innovation Center (FSIC), a coordinated regional platform strengthening workforce, innovation, and economic growth for Southeast Volusia and the Space Coast.

**Launch date:** May 25, 2026
**Built by:** Barrel & Pixel

## Tech Stack

- **Framework:** [Astro](https://astro.build/) with TypeScript
- **Styling:** Tailwind CSS v4 + CSS custom properties (design tokens)
- **Output:** Static HTML (SSG)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:4321

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── docs/                        # Project documentation
│   ├── 00-project-overview.md
│   ├── 01-source-materials.md   # PDF extracts with page references
│   ├── 02-information-architecture.md
│   ├── 03-content-guidelines.md
│   ├── 04-design-system.md
│   ├── 05-seo-accessibility.md
│   ├── 06-launch-plan.md
│   └── 07-open-questions.md
├── public/
│   ├── images/                  # Static images
│   └── docs/                    # Downloadable documents (if any)
├── src/
│   ├── assets/                  # Processed assets
│   ├── components/              # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro
│   │   ├── Section.astro
│   │   ├── SectionHeader.astro
│   │   ├── StatBlock.astro
│   │   ├── EngineCard.astro
│   │   ├── Callout.astro
│   │   ├── ValueItem.astro
│   │   └── ComingSoon.astro
│   ├── content/
│   │   └── copy/
│   │       └── home.md          # Approved Home page copy
│   ├── layouts/
│   │   └── BaseLayout.astro     # Global layout (head, header, footer)
│   ├── pages/                   # File-based routing
│   │   ├── index.astro          # Home (fully implemented)
│   │   ├── model.astro          # Coming Soon stub
│   │   ├── economic-impact.astro
│   │   ├── deployment.astro
│   │   ├── governance.astro
│   │   ├── contact.astro
│   │   ├── strategic-moment.astro
│   │   ├── programs-facilities.astro
│   │   ├── partnership-funding.astro
│   │   └── long-term-vision.astro
│   └── styles/
│       └── global.css           # Design tokens + base styles
└── package.json
```

## Current Status

### Implemented
- Home page (`/`) — fully built with all approved sections
- Global layout with responsive header/nav and footer
- Design system (color tokens, typography, spacing)
- Reusable component library (Button, Section, StatBlock, EngineCard, Callout, ValueItem)
- Complete project documentation in `/docs`

### Route Stubs
All future pages are implemented as route stubs using the global layout with a "Coming Soon" placeholder and a description from the information architecture document. This approach was chosen (Option A from the spec) to ensure:
- All routes are navigable and return proper HTTP 200 responses
- Navigation works end-to-end
- SEO meta tags are in place for all pages
- No 404s for internal links from the Home page

### Not Yet Built
See `docs/02-information-architecture.md` for full page specifications. Interior page content will be built in Phase 2.

## Design Tokens

Colors are defined as CSS custom properties and integrated with Tailwind:

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#163256` | Primary backgrounds, headings |
| `white` | `#FFFFFF` | Page backgrounds |
| `orange` | `#E37A2D` | CTAs, accents, stat highlights |
| `gray` | `#7F7F7F` | Body text, borders |
| `gray-light` | `#F5F5F5` | Alternating section backgrounds |
| `gray-dark` | `#4A4A4A` | Primary body text |

## Documentation

All project documentation is in the `/docs` directory:

- **00** — Project overview and scope
- **01** — Source material extracts with PDF page references
- **02** — Information architecture and sitemap
- **03** — Content and tone guidelines
- **04** — Design system specification
- **05** — SEO and accessibility requirements
- **06** — 3-month launch plan with QA checklist
- **07** — Open questions requiring stakeholder input
