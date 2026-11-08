# FSIC Design Direction: "Within Sight of the Cape"

This file is the source of truth for the visual design of the FSIC site. `docs/04-design-system.md` holds the earlier component specs. Where the two disagree, this file wins.

## The idea

FSIC is about **place**, not space. Southeast Volusia sits within sight of the busiest launch corridor in the world but has captured little of its value. The live site states the mission in one line: *"It ensures that opportunity flows into Southeast Volusia — not past it."*

Every design choice should support that message: **from spectator to participant**, with **the Cape and the community on one map**.

What to avoid: starfields, rockets, planets, glowing "space tech" gradients. Every space site uses them. They say "space" when FSIC's message is "here."

## Signature element

**The coastline and the launch arc** (`src/components/CoastlineMap.astro`). The map is a schematic line drawing of the coast from Cape Canaveral north to Edgewater and New Smyrna Beach. An orange launch arc rises from the Cape and bends north to land on Southeast Volusia.

- It's the one bold element on the page, and everything around it stays quiet.
- It's the **only** automatic animation. The arc draws once when the map scrolls into view. Without JS, or with reduced motion, it appears fully drawn.
- It's labeled "Schematic, not to scale." Don't add distances or figures to the map unless they're sourced.
- The arc and its landing point can be reused at a smaller size on interior page headers. Don't add a second signature element.

## Color

Each color has a meaning. Don't use them as decoration.

| Token | Hex | Meaning and use |
|-------|-----|-----------------|
| `night` | `#0D2138` | Dark sections: hero, economics, vision, final CTA, header, footer |
| `navy` | `#163256` | Brand. Headings and text on light backgrounds |
| `orange` | `#E37A2D` | Brand. **The space industry**: the launch arc, primary buttons, data bars, industry-side markers |
| `lagoon` | `#3E7F74` | **The community and the coast**: land on the map, civic and community content, accent rules on light backgrounds |
| `lagoon-light` | `#7FB8AC` | Lagoon on dark backgrounds |
| `salt` | `#EEF2F3` | Light alternate sections (a cool coastal white, not cream) |
| `gray-dark` | `#3F4A56` | Body text on light backgrounds |

Example: in the four-engine section, Talent, Innovation and Market get orange markers, and Civic gets lagoon green.

### Contrast rules (WCAG AA)
- **Never put white text on orange** (2.97:1). Primary buttons use `night` text on `orange` (5.5:1).
- **Never use orange for text on a light background** (it fails). Orange text is fine on `night` (5.5:1).
- `lagoon` on white is 4.7:1, fine for text. On `night`, use `lagoon-light` (7.2:1).
- Body text on dark backgrounds should be at least `white/70`.

## Typography

Three families, each with one job:

| Role | Setting |
|------|---------|
| Display: H1–H4, wordmark, key figures, emphasis lines | **Barlow Semi Condensed** (`font-display`), weights 600–700. Tall, compact, engineered signage: launch-control directness, and it fits more text per line on phones |
| Reading: paragraphs and lists | **Source Serif 4** (`font-serif`, the body default), 18px, line-height 1.7, optical sizing on. Gives the steady, established voice of an anchor institution and reads well over long pages |
| UI: nav, buttons, captions, labels, data, map, small print | **Archivo** (`font-sans`), weights 400–700 |

- **Reading text is serif by default.** Add `font-sans` to UI elements. Header, Footer, Button and CoastlineMap already do this at their root.
- All three load from Google Fonts in `BaseLayout.astro`. Barlow loads 500, 600 and 700 only, so don't ask for 400 in display type.
- Headline sizes use `clamp()` in `global.css`. Condensed type looks smaller at the same size, so display text outside headings uses one step up (`text-2xl` for emphasis lines, `text-3xl`/`text-4xl` for figures).
- Use `font-display` for non-heading display text (wordmark, figures, closing lines). Don't hard-code heading sizes in pages without a reason.
- Set display type in title case or sentence case. **No all-caps labels and no tracked-out eyebrow text.**
- Don't color a single word or phrase inside a headline. Emphasis comes from a change of weight or a separate line.
- Keep lines under about 75 characters (`max-w-3xl` or a grid column).

## Layout

- **Left-aligned by default.** Center only short, standalone moments.
- Use asymmetric two-column grids (`lg:grid-cols-[1.25fr_1fr]`): the headline or statement on the left, supporting text or data on the right.
- **Structure should show what the content is:**
  - A sequence becomes a line with nodes (the engines loop, deployment stages).
  - A range becomes a range bar, never a single big number.
  - A set of peers becomes a 2-column grid with a top rule.
  - Don't make identical cards with shadows.
- Sections alternate between `white`, `salt` and `night` to set the rhythm. No diagonal dividers or decorative grids.
- Container max width is 76rem, with a 1.5rem side gutter.

## Data

- Economic figures always appear as **ranges**, matching the Master Plan (`docs/03-content-guidelines.md`).
- Range bars: the solid orange part is the low estimate, and the lighter part extends to the high estimate. Include the legend.
- Always show the source and the disclaimer near the figures.

## Imagery

- The campus rendering (`public/images/fsic-hero.jpg`) is a **concept**. It always carries the caption "Concept rendering. Design and location to be determined." It belongs in the vision section, not the hero.
- Prefer real photographs of the region (lagoon, beach launch viewing, local classrooms and shops) when they become available. Don't use stock rockets or astronauts.

## Motion

- One automatic animation per page at most: the launch arc on the homepage.
- No fade-in on scroll, no hover lift on cards, no count-up numbers.
- Interaction feedback (hover color, focus ring, menu open) is fine.
- Always respect `prefers-reduced-motion`.

## Components

| Component | Notes |
|-----------|-------|
| `Button` | `primary` (orange with night text), `secondary` (navy outline), `secondary-light` (white outline on dark). Small 2px radius. Joins `BASE_URL` for internal hrefs |
| `CoastlineMap` | The signature element. Scripted only for the visibility trigger |
| `Header` / `Footer` | `night` background, Barlow wordmark, social links in the footer |
| `ComingSoon` | Placeholder for interior pages until they're built |

## Accessibility floor

- Visible focus: a 3px orange outline with a 3px offset (set globally).
- Skip link, logical heading order, and descriptive `alt` text. The map has `<title>` and `<desc>`.
- Check pages at 375px wide. Nothing should scroll horizontally.

## Checklist for new pages

1. Does the page show its content's structure, rather than using cards by default?
2. Is orange used only for industry or action, and lagoon for community?
3. Is there one memorable element at most?
4. No all-caps labels, single-word color accents, or scroll fade-ins?
5. Do figures show ranges and sources?
6. Does it hold up at 375px with keyboard focus visible?
