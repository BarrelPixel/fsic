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
- It appears on the homepage only. Interior pages open with `PageHero` (see "Interior page template"), not a smaller copy of the arc. Don't add a second signature element.

## Color

Each color has a meaning. Don't use them as decoration.

| Token | Hex | Meaning and use |
|-------|-----|-----------------|
| `night` | `#0D2138` | Dark sections: heroes, economics, vision, guiding principles, final CTA, header, footer |
| `navy` | `#163256` | Brand. Headings and text on light backgrounds |
| `orange` | `#E37A2D` | Brand. **The space industry**: the launch arc, primary buttons, data bars, industry-side markers |
| `lagoon` | `#3E7F74` | **The community and the coast**: land on the map, civic and community content, accent rules on light backgrounds |
| `lagoon-light` | `#7FB8AC` | Lagoon on dark backgrounds |
| `salt` | `#EEF2F3` | Light fill, used sparingly (a cool coastal white, not cream). Prefer white with rules |
| `gray-dark` | `#3F4A56` | Body text on light backgrounds |
| `gray` | `#6B7280` | Muted UI text: running heads, counts, problem markers (4.8:1 on white) |
| `orange-light` | `#F08F48` | Hover state of primary buttons only |

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

**Build pages from the grid components** (`src/components/`), not hand-written grid classes. They carry the rules below, so new pages can't drift from them:

| Component | What it does |
|-----------|--------------|
| `Section` | Section shell: `RunningHead`, heavy rule, headline across cols 1–9, optional intro line. Props: `index`/`total`/`label`/`dot` for the running head, `heading` (or a `heading` slot), `intro`, `dark`, `spacing` (`default`, `stacked` for a white section under another white one, `large` for the final call to action), `rule={false}` for a closing statement, a `media` slot for a full-bleed image before the container |
| `Grid` | The label \| content split (cols 1–4 \| 5–12), hung from one top line. `labelOffset` for content that opens with a peer rule, `stickyLabel` + `labelAs="header"` for spec sections, `labelLast` for a note that should follow the content on mobile |
| `Row` | A label \| content row inside the content column, for use in a `<dl>`. `rule="bottom"` when it opens the content column, `count` for "Programs · 5", `list` when the content is a list of `<details>` |
| `DashList` | A list with dash markers. `marker` carries the meaning (gray, navy, orange, lagoon, lagoon-light), `columns` for short items, `spacious` for longer lines |
| `PageHero` | Interior page opening (below) |
| `SectionBar` | Sticky in-page navigation with the current section marked |
| `RunningHead` | Used by `Section`; use directly only in custom layouts |

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
- `.section` is outside a CSS layer and overrides padding utilities. When two white sections stack, give the second `spacing="stacked"` so the gap doesn't double.

### Structure should show what the content is

- A sequence becomes numbered columns or rows (`01`, `02`…) with a top rule: the four engines, the deployment stages.
- A range becomes a range bar, never a single big number. On the homepage the figures are a table on the page grid: figure (cols 1–4), what it measures (5–8), range bar (9–12).
- A set of peers becomes a 2-column grid with a top rule.
- A before/after pair (what it solves, regional impact) sits in adjacent rows on the same axis. Don't put unrelated kinds of content in matching side-by-side columns.
- Lists use a short dash marker (`w-3 h-0.5`), grey for problems, navy for neutral points, the engine color for impact. No round bullets, chips, pills or boxed tags. Show sets of names as plain text (`Students · Educators · Employers`) or a ruled list.
- Long lists of items people may want to read in full use native `<details>` with a + that turns to ×. Don't hide short lists.
- Don't make identical cards with shadows. No diagonal dividers or decorative grids.
- **Left-aligned by default.** Center only short, standalone moments.

## Interior page template

Every interior page uses the same frame. The Model page (`src/pages/model.astro`) is the reference.

1. **`PageHero`** on `night`: the page title across the full measure, a rule, then label | content. The `aside` slot (label column) holds a short note such as a definition. It moves below the content on mobile. The default slot holds the lead (serif `text-2xl`) and, when the page has parallel sections, a numbered index of them (number, name, one line), linking to each.
2. **The body sections**, each a `Section` with a `RunningHead`:
   - *Narrative sections* (an argument told in order): headline above the grid, thesis in the label column, detail in the content column. This is the homepage pattern.
   - *Spec sections* (several items with the same shape, such as the four engines): no headline above the grid. The item's name is the `h2` in a sticky label column, and the content column is a summary followed by `Row`s, so items can be compared row by row. Wrap the run in an element whose first child is a `SectionBar`.
3. **Optional principles or context section** on `night`, `h2` in the label column.
4. **Closing**: one statement (`font-display text-3xl`–`4xl`) and the next steps in the content column, `rule={false}`.

Don't put the coastline map or the launch arc on interior pages.

## Data

- Economic figures always appear as **ranges**, matching the Master Plan (`docs/03-content-guidelines.md`).
- Range bars: the solid orange part is the low estimate, and the lighter part extends to the high estimate. Include the legend.
- Always show the source and the disclaimer near the figures.
- **Name the scenario.** The Master Plan's headline figures are its FSIC 2.0 scenario. Where figures appear with room to say so, name it (see `docs/08-current-site-audit.md` §3.10).
- **Comparing ordered scenarios** (Baseline → FSIC 1.0 → FSIC 2.0) uses one hue stepping light to dark: `#9DB0C8`, `#4E6F99`, `#1E4370` (the last is `navy-light`). This ramp passes the dataviz validator's ordinal checks on white. Don't use orange for a scenario; orange stays the industry color.
- **Comparison tables** put the metric in the label column and the series across the content column. In a `<table>`, set the first `<col>` to `34.2%` so the series start on the content column line (tables ignore `calc()` that mixes % and rem). Give each row its own scale for the inline bars, always print the values, and say "Bars are scaled within each row" in the note. Below `md`, restack each row: metric across the top, series side by side underneath. The Economic Impact page is the reference.

## Imagery

- The campus rendering (`public/images/fsic-concept.jpg`) is a **concept**. It always carries the caption "Concept rendering. Design and location to be determined." It belongs in the vision section, not the hero.
- Prefer real photographs of the region (lagoon, beach launch viewing, local classrooms and shops) when they become available. Don't use stock rockets or astronauts.
- **Press release graphics** (`src/content/news/images/`) are shown as FSIC published them, only on the News pages: beside the text in the label column of a release page (after the text on small screens, `max-w-xs`, so the first paragraph isn't pushed below the fold), and as a thumbnail under the date on the list at `lg`, all at one height (`h-32`, width follows the graphic) so rows keep one rhythm. The thumbnail links to the release but is hidden from keyboard and screen readers (the headline is the same link). They are the one exception to the color and imagery rules above, because they are part of the published release. Don't crop them, add text over them, or reuse them elsewhere on the site.

## Motion

- One automatic animation on the whole site: the launch arc on the homepage. Interior pages have none.
- No fade-in on scroll, no hover lift on cards, no count-up numbers.
- Interaction feedback (hover color, focus ring, menu open) is fine.
- Always respect `prefers-reduced-motion`.

## Components

| Component | Notes |
|-----------|-------|
| `Button` | `primary` (orange with night text), `secondary` (navy outline), `secondary-light` (white outline on dark). Small 2px radius. Joins `BASE_URL` for internal hrefs |
| `CoastlineMap` | The signature element. Scripted only for the visibility trigger |
| `Header` / `Footer` | `night` background, FSIC logo (`public/images/fsic-logo-reverse.png`, the dark-background version), social links in the footer. Both read `src/lib/nav.ts`. Header groups are dropdowns: a flat `night` panel with a hairline border under the trigger, opened by click (disclosure buttons, not ARIA menus), closed by Escape, an outside click or focus leaving; without JS they open on hover and focus. The phone menu lists each group under its name, with rules between entries and each page once. The footer shows one column per group |
| `RunningHead` | Section index above the heavy rule: `01 / 07`, an optional label, an optional engine-color `dot`, and `dark` for night sections. Decorative, so `aria-hidden` |
| `Section`, `Grid`, `Row`, `DashList`, `PageHero`, `SectionBar` | The grid components. See "Grid" for props and when to use each |
| `ComingSoon` | Placeholder for interior pages until they're built |

## Accessibility floor

- Visible focus: a 3px orange outline with a 3px offset (set globally).
- Skip link, logical heading order, and descriptive `alt` text. The map has `<title>` and `<desc>`.
- Check pages at 375px wide. Nothing should scroll horizontally.

## Checklist for new pages

1. Is the page built from the grid components (`Section`, `Grid`, `Row`, `DashList`, `PageHero`), with framing in cols 1–4 and detail in cols 5–12?
2. Does the page show its content's structure, rather than using cards by default?
3. Is orange used only for industry or action, and lagoon for community?
4. Is there one memorable element at most?
5. No all-caps labels, single-word color accents, chips, pills or scroll fade-ins?
6. Do figures show ranges and sources?
7. Does it hold up at 375px with keyboard focus visible?
