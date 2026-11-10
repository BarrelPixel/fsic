# FSIC Design Direction: "Within Sight of the Cape"

This file is the source of truth for the visual design of the FSIC site. `docs/04-design-system.md` holds the earlier component specs. Where the two disagree, this file wins.

## The idea

FSIC is about **place**, not space. Southeast Volusia sits within sight of the busiest launch corridor in the world but has captured little of its value. The live site states the mission in one line: *"It ensures that opportunity flows into Southeast Volusia — not past it."*

Every design choice should support that message: **from spectator to participant**, with **the Cape and the community on one map**.

What to avoid: starfields, rockets, planets, glowing "space tech" gradients. Every space site uses them. They say "space" when FSIC's message is "here."

## Signature element

**The homepage hero photo**: a launch plume seen from the dunes, the region watching the Cape (see "Imagery"). It's the one bold element on the homepage, and everything around it stays quiet. Interior pages open with `PageHero` (see "Interior page template"). Don't add a second signature element.

The coastline map with its launch arc was the signature element until November 2026. It was removed from the site; it is in the git history if it's ever wanted again.

## Color

Each color has a meaning. Don't use them as decoration.

| Token | Hex | Meaning and use |
|-------|-----|-----------------|
| `night` | `#0D2138` | Dark sections: heroes, economics, vision, guiding principles, header, footer |
| `navy` | `#163256` | Brand. Headings and text on light backgrounds |
| `orange` | `#E37A2D` | Brand. **The space industry**: data bars, industry-side markers, the focus ring |
| `orange-deep` | `#B75A16` | Primary button fill (white text, 4.68:1). Hover: `orange-deeper` `#A9510F` (5.43:1). Buttons only |
| `lagoon` | `#3E7F74` | **The community and the coast**: civic and community content, accent rules on light backgrounds |
| `lagoon-light` | `#7FB8AC` | Lagoon on dark backgrounds |
| `gray-dark` | `#3F4A56` | Body text on light backgrounds |
| `gray` | `#6B7280` | Muted UI text: running heads, counts, problem markers (4.8:1 on white) |
| `rule` / `rule-on-dark` | navy 15% / white 25% | Hairline rules between rows and around lists (`border-rule`, `divide-rule`; `border-rule-on-dark` on night) |
| `scenario-baseline`, `scenario-1`, `scenario-2` | `#9DB0C8`, `#4E6F99`, `#1E4370` | The ordered scenario ramp (see "Data"). Use only for scenarios |

Example: in the four-engine sections, Talent, Innovation and Market get orange markers, and Civic gets lagoon green.

### Contrast rules (WCAG AA)
- **Never put white text on the brand `orange`** (2.96:1). Primary buttons use white text on `orange-deep` (4.68:1), so the brand orange is never a button fill.
- **Never use orange for text on a light background** (it fails). Orange text is fine on `night` (5.5:1).
- `lagoon` on white is 4.7:1, fine for text. On `night`, use `lagoon-light` (7.2:1).
- White text on dark backgrounds uses three tints only: `white/90` for main text, `white/75` for secondary text, `white/60` for captions.

## Typography

Three families, each with one job:

| Role | Setting |
|------|---------|
| Display: H1–H4, wordmark, key figures, emphasis lines | **Barlow Semi Condensed** (`font-display`), weights 600–700. Tall, compact, engineered signage: launch-control directness, and it fits more text per line on phones |
| Reading: paragraphs and lists | **Source Serif 4** (`font-serif`, the body default), 18px on a 28px line (paragraphs and lists alike), optical sizing on. Gives the steady, established voice of an anchor institution and reads well over long pages |
| UI: nav, buttons, captions, labels, data, map, small print | **Archivo** (`font-sans`), weights 400–700 |

- **Reading text is serif by default.** Add `font-sans` to UI elements. Header, Footer and Button already do this at their root.
- All three are self-hosted (Fontsource packages, imported in `BaseLayout.astro`, which also preloads the Latin files). Source Serif 4 and Archivo are variable fonts (`--font-serif` and `--font-sans` name them "… Variable"). Barlow loads 500, 600 and 700 only, so don't ask for 400 in display type.
- Headline sizes use `clamp()` in `global.css`. Condensed type looks smaller at the same size, so display text outside headings uses one step up (`text-2xl` for emphasis lines, `text-3xl`/`text-4xl` for figures).
- Use `font-display` for non-heading display text (wordmark, figures, closing lines). Don't hard-code heading sizes in pages without a reason.
- Set display type in title case or sentence case. **No all-caps labels and no tracked-out eyebrow text.**
- Don't color a single word or phrase inside a headline. Emphasis comes from a change of weight or a separate line.
- Keep lines under about 75 characters (`max-w-3xl` or a grid column).

### Type scale

Use these steps and no others. Hierarchy comes from scale, weight and position, not from boxes or color. The steps are classes in `global.css` (`@utility`): use the class, not the separate Tailwind classes it stands for, and set color separately (`text-navy` on white, `text-white` on night).

| Step | Class | Setting | Use |
|------|-------|---------|-----|
| Display | `h1`, `h2` | clamp sizes in `global.css` | Page title, section headlines, engine names |
| Statement | `text-statement` | Barlow `text-2xl` semibold, `leading-snug`. Closings and figures step up (`Closing`: `text-3xl`–`4xl`) | A section's thesis or closing line, key figures |
| Lead | `text-lead` | Serif `text-2xl`, `leading-snug` | The first thing to read after a headline: summaries, intro sentences |
| Body | — | Serif 18px on 28px (the default; never `text-lg` or `leading-*` on reading text) | Paragraphs and lists |
| Label | `text-label` | Archivo `text-sm` semibold | Row labels, running heads, legends |
| Caption | `text-caption` | Archivo `text-sm` | Source lines, notes, small print, the PageHero aside |
| UI | — | `font-sans` 16–18px, `font-semibold` for list items you open | Nav, buttons, component titles |

Links in running text use `link` (navy), `link-on-dark` (on night), or `links-in` on a container whose HTML you don't write tag by tag (the FAQ answers).

## Grid

The site uses one Swiss-style modular grid. Every section shares the same vertical lines, so content aligns down the whole page.

**Build pages from the grid components** (`src/components/`), not hand-written grid classes. They carry the rules below, so new pages can't drift from them:

| Component | What it does |
|-----------|--------------|
| `Section` | Section shell: `RunningHead`, heavy rule, headline across cols 1–9, optional intro line. Props: `index`/`total`/`label`/`dot` for the running head, `heading` (or a `heading` slot), `intro`, `dark`, `spacing` (`default`, `stacked` for a white section under another white one, `large` for the final call to action), `rule={false}` for a closing statement, a `media` slot for a full-bleed image before the container |
| `Grid` | The label \| content split (cols 1–4 \| 5–12), hung from one top line. `labelOffset` for content that opens with a peer rule, `labelAs="header"` for spec sections, `stickyLabel` to pin the label column on a page without a `SectionBar` (the press release page), `labelLast` for a note that should follow the content on mobile |
| `Row` | A label \| content row inside the content column, for use in a `<dl>`. `rule="bottom"` when it opens the content column, `count` for "Programs · 5", `list` when the content is a list of `<details>`. `dot` (gray, navy, orange, lagoon; with `dark`, lagoon draws as lagoon-light) puts a small dot after the label to say what the list beside it is: gray for problems, the engine or phase color for impact |
| `List` | Items with a small round dot on the column edge, text 16px in, 8px apart on the 28px leading (`.list` in `global.css`; on-dark dots inside night sections). `spacious` (12px) for items that run to several lines, `columns` for short items, `html` for items with links |
| `PageHero` | Interior page opening (below) |
| `SectionBar` | Sticky in-page navigation with the current section marked. **Every page whose `PageHero` lists its sections gets one** (all interior pages with sections; not the homepage, News or Contact), so the opening's section list follows you down the page. Wrap the sections in an element whose first child is the bar (it scrolls away before the closing), and list the sections once (`src/lib/sections.ts`): the `PageHero` index, the bar and each `Section`'s id and running head read that list. A `Section` with an `id` gets `scroll-mt-20` itself, so links land below the bar. It is the only sticky element on an interior page: section headings and label columns scroll with their content |
| `TableRow` | One full-width table row on the 12 columns: cells in slots `c1`–`c3`, widths in `spans` (e.g. `[4, 4, 4]`), stacked below `lg`. `head` for the column labels (lg only, heavy navy rule), `baseline` to share a baseline, `rule={false}` when the list draws its own rules, `cellClass` for a cell's alignment. Pass padding and stacked gap in `class`. The ROI and funding tables, the partner and metric lists, and the News list use it |
| `RunningHead` | Used by `Section`; use directly only in custom layouts |

- **12 columns** at `lg` (`lg:grid-cols-12 lg:gap-x-8`) inside the container (max 76rem, 1.5rem gutter).
- **Label column: cols 1–4** (`lg:col-span-4`). It holds the section's framing: a thesis statement, an intro sentence, an engine's name, or a short list such as who can take part.
- **Content column: cols 5–12** (`lg:col-span-8`). It holds the detail: body text, lists, data, buttons.
- **Rows inside the content column** split 2 + 6 of 8 (`md:grid-cols-8`, `md:col-span-2` label, `md:col-span-6` content), using `<dl>` where it fits. Row labels are Label step type with `md:pt-label-offset` (a theme spacing token) so they share the first line of their content. Every list starting at the same line is the point.
- Below `lg`, everything stacks in reading order: label column first, then content.

### Section anatomy

```
01 / 07  The strategic moment          ← RunningHead (index, total, optional label)
═══════════════════════════════════════  ← border-t-2 (navy on white, white on night)
Headline across cols 1–9 (max-w-4xl)
[cols 1–4] thesis / intro   [cols 5–12] body, rows, data, button
```

- Narrative sections (homepage) put the headline above the grid. Spec sections (Model page engines) put the name in the label column. The label column scrolls with its section; the `SectionBar` does the wayfinding.
- The hero and the page's final call to action skip the running head.
- **Running-head labels only when the headline doesn't already name the topic.** "02 / 07 The economic case" above "Transformational, Long-Term Regional Impact" helps; "Governance and transparency" above "Governance & Transparency" is noise, so that section shows the number alone.
- **Columns share one top line.** The first line of the label column and the first line of the content column start at the same height. Check it by measuring, not by eye (the first-line tops should be within the difference between the two type sizes).
  - Hang columns from the top (`lg:items-start`). Don't vertically center text against a taller neighbour.
  - Don't open a column with a rule when the column beside it has none. Put the rule below the row, use rules between items (`divide-y`, first item `pt-0`), or, where the content opens with peer rules (the 2×2 value grid), give the label column the same offset (`lg:pt-rule-offset` for `border-t-2` + `pt-5`; `Grid labelOffset` does this).
  - In tables, align figure and label on a shared baseline (`lg:items-baseline`); center only non-text marks such as range bars (`lg:self-center`).
  - A closing row puts the statement in the label column and the action (button) in the content column, both hung from the rule above. Don't push buttons to the right edge; everything is flush left.
- **One numbering system per page.** Section numbers (`01 / 07`) and engine numbers (`01`–`04`, the same on every page) are the only numerals used as labels. Sub-sequences inside a section use words ("First:", "Then:") rather than a second set of numbers.
- Separate sections with the heavy rule and whitespace. Prefer white with rules over background fills. Use `night` for a few anchor sections (hero, economics, vision, principles). Every page ends on white (the homepage's final call to action, an interior page's `Closing`) so it never runs into the `night` footer.
- `.container` and `.section` are outside a CSS layer on purpose: `.container` must beat Tailwind's own `container` utility (which caps width at each breakpoint), and `.section` overrides padding utilities. Section padding steps down below `md` (48rem). When two white sections stack, give the second `spacing="stacked"` so the gap doesn't double.

### Structure should show what the content is

- A sequence becomes numbered columns or rows (`01`, `02`…) with a top rule: the four engines, the deployment stages.
- A range becomes a range bar, never a single big number. On the homepage the figures are a table on the page grid: figure (cols 1–4), what it measures (5–8), range bar (9–12).
- A set of peers becomes a 2-column grid with a top rule.
- A before/after pair (what it solves, regional impact) sits in adjacent rows on the same axis. Don't put unrelated kinds of content in matching side-by-side columns.
- Lists (`List`) mark each item with a small round dot on the column edge; the text starts 16px in, and items are separated by space (8px; `spacious` 12px), so they read as a list without rules or dashes. The dot is navy at 60% (white at 60% on night), drawn in CSS and centered on the first line's lowercase letters. When a list's meaning matters (problems vs. impact), say it on the list's label with `Row`'s `dot` (after the label, so labels stay flush): gray for problems, the engine or phase color for impact. Only `List`'s dot marks list items: no other bullets, dashes, chips, pills or boxed tags.
- Long lists of items people may want to read in full use native `<details>` with a + that turns to ×. Don't hide short lists. When several items each carry two or more lists (partner types, governing bodies), keep each item's name and one-sentence summary visible and put its lists in `Disclosure`s, so all items fit in a scan.
- Square corners and no shadows anywhere (buttons, menus, panels); the only round shapes are the small dots. Don't make cards. No diagonal dividers or decorative grids.
- **Left-aligned by default.** Center only short, standalone moments.

## Interior page template

Every interior page uses the same frame. The Model page (`src/pages/model.astro`) is the reference.

1. **`PageHero`** on `night`: the page title across the full measure, a rule, then label | content. The `aside` slot (label column) holds a short note such as a definition. It moves below the content on mobile. The default slot holds the lead (serif `text-2xl`) and, when the page has parallel sections, a numbered index of them (number, name, one line), linking to each.
2. **The body sections**, each a `Section` with a `RunningHead`:
   - *Narrative sections* (an argument told in order): headline above the grid, thesis in the label column, detail in the content column. This is the homepage pattern.
   - *Spec sections* (several items with the same shape, such as the four engines): no headline above the grid. The item's name is the `h2` in the label column (not sticky: the `SectionBar` marks the current item), and the content column is a summary followed by `Row`s, so items can be compared row by row. Wrap the run in an element whose first child is a `SectionBar`.
3. **Optional principles or context section** on `night`, `h2` in the label column.
4. **Closing** (`Closing` component): one statement (`font-display text-3xl`–`4xl`) and the next steps in the content column, `rule={false}`.

Don't put the hero photo on interior pages.

## Data

- Economic figures always appear as **ranges**, matching the Master Plan (`docs/03-content-guidelines.md`).
- Range bars: the solid orange part is the low estimate, and the lighter part extends to the high estimate. Include the legend.
- Always show the source and the disclaimer near the figures.
- **Name the scenario.** The Master Plan's headline figures are its FSIC 2.0 scenario. Where figures appear with room to say so, name it (see `docs/08-current-site-audit.md` §3.10).
- **Comparing ordered scenarios** (Baseline → FSIC 1.0 → FSIC 2.0) uses one hue stepping light to dark: `#9DB0C8`, `#4E6F99`, `#1E4370` (the last is `navy-light`). This ramp passes the dataviz validator's ordinal checks on white. Don't use orange for a scenario; orange stays the industry color.
- **Comparison tables** put the metric in the label column and the series across the content column. In a `<table>`, set the first `<col>` to `34.2%` so the series start on the content column line (tables ignore `calc()` that mixes % and rem). Give each row its own scale for the inline bars, always print the values, and say "Bars are scaled within each row" in the note. Below `md`, restack each row: metric across the top, series side by side underneath. The Economic Impact page is the reference.

## Imagery

- The campus rendering (`src/assets/fsic-concept.jpg`, through `astro:assets`) is a **concept**. It always carries the caption "Concept rendering. Design and location to be determined." It belongs in the vision section, not the hero.
- Prefer real photographs of the region (lagoon, beach launch viewing, local classrooms and shops) when they become available. Don't use stock rockets or astronauts.
- **Homepage hero photo** (`src/assets/fsic-hero.png`, through `astro:assets` so it's resized per screen; owned by FSIC, confirmed November 2026, so no credit or caption): a launch plume seen from the dunes, full-bleed behind the hero text from `md` up. There the text sits over the open sky on the left; a `night` gradient keeps it readable (left to right at `lg`, top to bottom at `md`). On phones (below `md`) the photo is a band across the top, undimmed, and the text follows below it on `night`: the plume is the first thing a phone shows. The headline's whole first line sits on the photo (48px overlap; the photo's bottom edge, where `night` starts, doesn't move); only the bottom third of the photo (the low sky, surf and dunes) darkens toward `night` under it, so the upper sky and plume stay undimmed. The band is at least as tall as the photo's proportions (`max(46svh, 62.5vw)`), so only its sides are cropped, never the top or the dunes. The photo always shows its full height, plume tip to dunes: it is anchored right at the hero's height and never scaled to the width, so wide screens don't crop the top. On screens wider than the photo, its left edge fades into `night` (`.hero-photo` mask in `global.css`); below `md` it is cropped to the plume (`object-position` 78%). Check contrast against the lightest pixel under each text block when changing the photo or the gradient (it measured 6.0:1 or better at 375, 640, 768, 1024, 1280, 1600 and 2328 px; since the phone layout of November 2026: 6.0:1 or better at 320–767 px, where the headline overlaps the photo). The source is 1440×900; a larger original would look sharper on large and high-density screens. It's the homepage's signature element (see above).
- **Press release graphics** (`src/content/news/images/`) are shown as FSIC published them, only on the News pages: beside the text in the label column of a release page (after the text on small screens, `max-w-xs`, so the first paragraph isn't pushed below the fold), and as a thumbnail under the date on the list at `lg`, all at one height (`h-32`, width follows the graphic) so rows keep one rhythm. The thumbnail links to the release but is hidden from keyboard and screen readers (the headline is the same link). They are the one exception to the color and imagery rules above, because they are part of the published release. Don't crop them, add text over them, or reuse them elsewhere on the site.

## Motion

- **One automatic animation on the whole site: range bars draw in, wherever they appear** (the homepage figures; Economic Impact's at-a-glance figures and its scenario comparison). Each bar draws once when its group scrolls into view: the solid low estimate grows from the left, then the lighter extension continues to the high estimate. Rows follow one another (`--row` × `--motion-stagger`); in the scenario comparison, each row builds up Baseline → FSIC 1.0 → FSIC 2.0 (`--step` × `--motion-step`). It shows how to read a range and how the scenarios compare; the figures themselves never move. Mark a group with `range-bars` and `data-range-bars`, its bars with `range-low` / `range-high`, and include `RangeBarsDraw` on the page. Without JS, with reduced motion and in print, the bars are fully drawn. Don't add a different automatic animation.
- **One scroll effect, the homepage hero on phones:** the photo stays pinned while the hero text, on its own `night` backing that fades in just above the headline, scrolls up over it like a sheet; then the next section slides up over the hero. It is CSS only (`position: sticky`), needs no JavaScript and involves no animation, so it is the same with reduced motion. Text over the photo must stay at 6:1 or better at every scroll position. Don't add scroll effects elsewhere.
- No fade-in on scroll, no hover lift on cards, no count-up numbers, no parallax (layers moving at different speeds; the hero's pinned photo above is the one exception to scroll effects), nothing that loops.
- Interaction feedback is fine and shares the motion tokens in `global.css` (`--ease-standard`; `--motion-fast` 150ms, `--motion-medium` 250ms): link underlines darken, the menu dropdowns fade in and settle 4px down, expanding items (`Disclosure`) open with a height transition where the browser supports it (others open instantly), index and headline links reveal their underline (`underline-reveal`), the Model page's section bar eases between sections, the phone menu fades in like the dropdowns, and moving between pages cross-fades the content while the header stays put (view transitions; browsers without them navigate as before). On Economic Impact, hovering a scenario's header or cells dims the other scenarios' bars to 30% (`scenario-table`, CSS `:has`), so one scenario can be followed down the table.
- Always respect `prefers-reduced-motion`: it turns every transition and the range-bar animation off, and the page then looks exactly as it does at rest.

## Components

| Component | Notes |
|-----------|-------|
| `Button` | `primary` (white on `orange-deep`), `secondary` (navy outline), `secondary-light` (white outline on dark). All have a 2px border (primary's matches its fill), so buttons side by side are the same height, and the label is centered with flex. Square corners. Adds the base path to internal hrefs (`url()`, `src/lib/url.ts`) |
| `Header` / `Footer` | `night` background, FSIC logo (`public/images/fsic-logo-reverse.png`, the dark-background version), social links in the footer. Both read `src/lib/nav.ts`. Header groups are dropdowns: a flat `night` panel with a hairline border under the trigger, opened by click (disclosure buttons, not ARIA menus), closed by Escape, an outside click or focus leaving; without JS they open on hover and focus. The phone menu lists each group under its name, with rules between entries, and Escape closes it. Each page appears once in the menus. The footer shows one column per group Phone menu: each group's name is a small grey label (`text-label`, white/60) over its pages, which are larger (18px), so the groups read as headings; the single links follow in two columns; the current page has a white bar on its left edge; the link marked `cta` in `nav.ts` (Get Involved) closes the menu as its one primary button. It fits an iPhone 13 screen without scrolling. |
| `RunningHead` | Section index above the heavy rule: `01 / 07`, an optional label, an optional engine-color `dot`, and `dark` for night sections. Decorative, so `aria-hidden` |
| `Section`, `Grid`, `Row`, `List`, `PageHero`, `SectionBar` | The grid components. See "Grid" for props and when to use each |
| `HeroIndex` | The numbered section index inside `PageHero`. `size="large"` (display names, optional note such as "6 questions") or `compact` (body type, `columns` for two columns) |
| `Disclosure` | An item that opens in place: `<details>` with the + that turns to ×. Summary in the `summary` slot; callers set spacing |
| `ProgramList` | An engine's programs from `src/data/programs.ts`, each a `Disclosure` |
| `Closing` | A page's closing: `statement` in display type and the buttons in the default slot, no heavy rule |
| `RangeBar` / `RangeLegend` | One estimate range as a bar (solid orange to the low estimate, lighter to the high one; `low`, `high`), and the legend that goes with it (`dark` on night). The Economic Impact scenario comparison draws its own bars in the scenario colors |
| `RangeTable` / `RangeRow` | A table of estimate ranges: `RangeTable` (`dark` on night) holds one `RangeRow` per figure, with the figure and what it measures in the `figure` and `detail` slots, `spans` for their widths (the bar takes the rest) and `index` for the draw-in stagger. The homepage figures and Economic Impact's at-a-glance figures use it. Include `RangeBarsDraw` on the page |
| `RangeBarsDraw` | Draws every `data-range-bars` group on the page once when it scrolls into view (see "Motion"). Include once per page with range bars |
| `Dot` | The small round marker. `tone` (orange, lagoon, navy, gray, or `none` to keep the space), `dark` on night, `size` sm (8px) or md (10px). Colors come from `src/lib/tones.ts`, which also gives bars their color (`toneBg`): lagoon becomes lagoon-light and navy becomes white on night. `Row`'s and `RunningHead`'s dots use it |
| `ConceptRendering` | The campus concept rendering, full bleed with its required caption. Put it in a dark `Section`'s `media` slot |
| `ComingSoon` | Placeholder for interior pages until they're built |

## Accessibility floor

- Visible focus: a 3px orange outline with a 3px offset (set globally).
- Skip link, logical heading order, and descriptive `alt` text.
- Check pages at 375px wide. Nothing should scroll horizontally.
- Give each `nav` on a page its own name: the `PageHero` index is "Page contents" (or names its items, such as "The four engines"), the `SectionBar` "… on this page".

## Checklist for new pages

1. Is the page built from the grid components (`Section`, `Grid`, `Row`, `List`, `PageHero`), with framing in cols 1–4 and detail in cols 5–12?
2. Does the page show its content's structure, rather than using cards by default?
3. Is orange used only for industry or action, and lagoon for community?
4. Is there one memorable element at most?
5. No all-caps labels, single-word color accents, chips, pills or scroll fade-ins?
6. Do figures show ranges and sources?
7. Does it hold up at 375px with keyboard focus visible?
