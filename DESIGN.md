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
| `salt` | `#EEF2F3` | Light fill, used sparingly (a cool coastal white, not cream). Prefer white with rules |
| `gray-dark` | `#3F4A56` | Body text on light backgrounds |

Example: in the four-engine sections, Talent, Innovation and Market get orange markers, and Civic gets lagoon green.

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

### Type scale

Use these steps and no others. Hierarchy comes from scale, weight and position, not from boxes or color.

| Step | Setting | Use |
|------|---------|-----|
| Display | `h1`, `h2` (clamp sizes in `global.css`) | Page title, section headlines, engine names |
| Statement | `font-display text-2xl`–`text-4xl font-semibold` | A section's thesis or closing line, key figures |
| Lead | Serif `text-xl`–`text-2xl`, `leading-snug` | The first thing to read after a headline: summaries, intro sentences |
| Body | Serif 18px (the default) | Paragraphs and lists |
| Label | `font-sans text-sm font-semibold` | Row labels, running heads, captions, legends |
| UI | `font-sans` 16–18px, `font-semibold` for list items you open | Nav, buttons, component titles |

## Grid

The site uses one Swiss-style modular grid. Every section shares the same vertical lines, so content aligns down the whole page.

- **12 columns** at `lg` (`lg:grid-cols-12 lg:gap-x-8`) inside the container (max 76rem, 1.5rem gutter).
- **Label column: cols 1–4** (`lg:col-span-4`). It holds the section's framing: a thesis statement, an intro sentence, an engine's name, or a short list such as who can take part.
- **Content column: cols 5–12** (`lg:col-span-8`). It holds the detail: body text, lists, data, buttons.
- **Rows inside the content column** split 2 + 6 of 8 (`md:grid-cols-8`, `md:col-span-2` label, `md:col-span-6` content), using `<dl>` where it fits. Row labels are Label step type with `md:pt-[0.3rem]` so they share the first line of their content. Every list starting at the same line is the point.
- Below `lg`, everything stacks in reading order: label column first, then content.

### Section anatomy

```
01 / 07  The strategic moment          ← RunningHead (index, total, optional label)
═══════════════════════════════════════  ← border-t-2 (navy on white, white on night)
Headline across cols 1–9 (max-w-4xl)
[cols 1–4] thesis / intro   [cols 5–12] body, rows, data, button
```

- Narrative sections (homepage) put the headline above the grid. Spec sections (Model page engines) put the name in the label column, pinned with `lg:sticky lg:top-20 lg:self-start`.
- The hero and the page's final call to action skip the running head.
- **Running-head labels only when the headline doesn't already name the topic.** "02 / 07 The economic case" above "Transformational, Long-Term Regional Impact" helps; "Governance and transparency" above "Governance & Transparency" is noise, so that section shows the number alone.
- **Columns share one top line.** The first line of the label column and the first line of the content column start at the same height. Check it by measuring, not by eye (the first-line tops should be within the difference between the two type sizes).
  - Hang columns from the top (`lg:items-start`). Don't vertically center text against a taller neighbour, including the hero text against the map.
  - Don't open a column with a rule when the column beside it has none. Put the rule below the row, use rules between items (`divide-y`, first item `pt-0`), or, where the content opens with peer rules (the 2×2 value grid), give the label column the same offset (`lg:pt-[1.375rem]` for `border-t-2` + `pt-5`).
  - In tables, align figure and label on a shared baseline (`lg:items-baseline`); center only non-text marks such as range bars (`lg:self-center`).
  - A closing row puts the statement in the label column and the action (button) in the content column, both hung from the rule above. Don't push buttons to the right edge; everything is flush left.
- **One numbering system per page.** Section numbers (`01 / 07`) and engine numbers (`01`–`04`, the same on every page) are the only numerals used as labels. Sub-sequences inside a section use words ("First:", "Then:") rather than a second set of numbers.
- Separate sections with the heavy rule and whitespace. Prefer white with rules over background fills. Use `night` for a few anchor sections (hero, economics, vision, principles, final CTA). Use `salt` sparingly.
- `.section` is outside a CSS layer and overrides padding utilities. When two white sections stack, give the second `pb-[var(--section-py)]` instead of `.section` so the gap doesn't double.

### Structure should show what the content is

- A sequence becomes numbered columns or rows (`01`, `02`…) with a top rule: the four engines, the deployment stages.
- A range becomes a range bar, never a single big number. On the homepage the figures are a table on the page grid: figure (cols 1–4), what it measures (5–8), range bar (9–12).
- A set of peers becomes a 2-column grid with a top rule.
- A before/after pair (what it solves, regional impact) sits in adjacent rows on the same axis. Don't put unrelated kinds of content in matching side-by-side columns.
- Lists use a short dash marker (`w-3 h-0.5`), grey for problems, navy for neutral points, the engine color for impact. No round bullets, chips, pills or boxed tags. Show sets of names as plain text (`Students · Educators · Employers`) or a ruled list.
- Long lists of items people may want to read in full use native `<details>` with a + that turns to ×. Don't hide short lists.
- Don't make identical cards with shadows. No diagonal dividers or decorative grids.
- **Left-aligned by default.** Center only short, standalone moments.

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
| `Header` / `Footer` | `night` background, FSIC logo (`public/images/fsic-logo-reverse.png`, the dark-background version), social links in the footer |
| `RunningHead` | Section index above the heavy rule: `01 / 07`, an optional label, an optional engine-color `dot`, and `dark` for night sections. Decorative, so `aria-hidden` |
| `ComingSoon` | Placeholder for interior pages until they're built |

## Accessibility floor

- Visible focus: a 3px orange outline with a 3px offset (set globally).
- Skip link, logical heading order, and descriptive `alt` text. The map has `<title>` and `<desc>`.
- Check pages at 375px wide. Nothing should scroll horizontally.

## Checklist for new pages

1. Does every section sit on the 12-column grid, with framing in cols 1–4 and detail in cols 5–12?
2. Does the page show its content's structure, rather than using cards by default?
3. Is orange used only for industry or action, and lagoon for community?
4. Is there one memorable element at most?
5. No all-caps labels, single-word color accents, chips, pills or scroll fade-ins?
6. Do figures show ranges and sources?
7. Does it hold up at 375px with keyboard focus visible?
