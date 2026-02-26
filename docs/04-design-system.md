# 04 — Design System

## Color Tokens

All colors are defined as CSS custom properties on `:root` and mapped to Tailwind via `@theme`.

| Token | Variable | Hex | Usage |
|-------|----------|-----|-------|
| Navy | `--color-navy` | `#163256` | Primary backgrounds, headings, nav |
| White | `--color-white` | `#FFFFFF` | Page backgrounds, text on dark |
| Orange | `--color-orange` | `#E37A2D` | CTAs, accents, stat highlights, hover states |
| Gray | `--color-gray` | `#7F7F7F` | Body text, borders, muted elements |
| Navy Light | `--color-navy-light` | `#1e4370` | Hover states on navy backgrounds |
| Orange Dark | `--color-orange-dark` | `#c96820` | Hover/active states for orange CTAs |
| Gray Light | `--color-gray-light` | `#F5F5F5` | Alternating section backgrounds |
| Gray Dark | `--color-gray-dark` | `#4A4A4A` | Headings on light backgrounds |

## Typography Scale

**Font Stack:** System font stack (no external font dependencies for launch).

```
--font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

| Level | Size (rem) | Weight | Line-height | Usage |
|-------|-----------|--------|-------------|-------|
| Display | 3.5 | 700 | 1.1 | Hero headline only |
| H1 | 2.5 | 700 | 1.2 | Page titles |
| H2 | 2 | 700 | 1.25 | Section headings |
| H3 | 1.5 | 600 | 1.3 | Subsection headings |
| H4 | 1.25 | 600 | 1.35 | Card titles |
| Body Large | 1.25 | 400 | 1.6 | Lead paragraphs |
| Body | 1.0625 | 400 | 1.7 | Default body text |
| Body Small | 0.875 | 400 | 1.6 | Captions, fine print |
| Stat Value | 2.5 | 700 | 1.1 | Economic impact numbers |
| Stat Label | 0.875 | 500 | 1.4 | Stat descriptions |

## Spacing Scale

Base unit: `0.25rem` (4px). Use Tailwind's default spacing scale, supplemented by:

| Token | Value | Usage |
|-------|-------|-------|
| `--section-py` | `5rem` (80px) | Vertical padding for page sections |
| `--section-py-lg` | `7rem` (112px) | Vertical padding for hero/CTA sections |
| `--container-max` | `72rem` (1152px) | Max-width for content container |
| `--container-px` | `1.5rem` (24px) | Horizontal padding for container |

## Component Specifications

### Button
Two variants: **Primary** and **Secondary**.

**Primary (Orange):**
- Background: `--color-orange`
- Text: `--color-white`
- Padding: `0.875rem 2rem`
- Border-radius: `0.375rem`
- Font-weight: 600
- Font-size: 1rem
- Hover: background darkens to `--color-orange-dark`
- Transition: 200ms ease

**Secondary (Outline):**
- Background: transparent
- Border: 2px solid `--color-navy` (or `--color-white` on dark backgrounds)
- Text: `--color-navy` (or `--color-white` on dark)
- Same padding, radius, weight as primary
- Hover: fill navy with white text (or fill white with navy text on dark)

### StatBlock
Displays a single economic impact figure.
- **Value:** Stat Value typography, color `--color-orange`
- **Label:** Stat Label typography, color `--color-gray` (or `--color-white` on dark)
- Layout: stacked (value above label), centered
- Grid: 2-up on mobile, 4-up on desktop

### EngineCard
Displays one of the four engines.
- **Title:** H4 typography, `--color-navy`
- **Subtitle (em dash label):** Body Small, `--color-gray`
- **Body:** Body typography
- Background: `--color-white`
- Border-top: 4px solid `--color-orange`
- Padding: `2rem`
- Shadow: subtle (`0 1px 3px rgba(0,0,0,0.1)`)
- Grid: 1-up mobile, 2-up tablet, 4-up desktop

### TimelineRow
Displays a phase in the deployment timeline.
- **Phase label:** H4 typography, `--color-orange`
- **Description:** Body typography
- Left border or marker: `--color-orange`
- Alternating background: transparent / `--color-gray-light`

### SectionHeader
Standard section header pattern.
- **Headline:** H2 typography
- **Optional subhead:** Body Large typography, `--color-gray`
- Centered alignment for most sections
- Left-aligned for content-heavy sections
- Bottom margin: `2rem`

### Callout
Highlighted text block (used for closing statements).
- Background: `--color-gray-light` or `--color-navy`
- Padding: `2rem`
- Border-left: 4px solid `--color-orange`
- Text: Body Large typography, italic optional

## Responsive Breakpoints

| Name | Min-width | Usage |
|------|-----------|-------|
| sm | 640px | Phone landscape |
| md | 768px | Tablet portrait |
| lg | 1024px | Tablet landscape / small desktop |
| xl | 1280px | Desktop |

## Accessibility Requirements
- All text-on-background combinations must meet WCAG 2.1 AA contrast (4.5:1 normal, 3:1 large).
- Navy (#163256) on White (#FFFFFF): **11.6:1** — passes AAA.
- White (#FFFFFF) on Navy (#163256): **11.6:1** — passes AAA.
- Orange (#E37A2D) on White (#FFFFFF): **3.2:1** — passes AA for large text only. Use orange for accents/CTAs with sufficient size, not body text.
- Gray (#7F7F7F) on White (#FFFFFF): **4.0:1** — borderline. Use for large text or non-essential decorative text only. Body text should use `--color-gray-dark` (#4A4A4A) on white for **8.6:1**.
