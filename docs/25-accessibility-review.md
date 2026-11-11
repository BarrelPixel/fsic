# 25 — Accessibility review (WCAG 2.2 AA)

**Date:** November 2026. **Scope:** 20 pages (every page type: home, the eight content pages, FAQ, News and a release, Contact, Blog and three posts, including the one with tables, the privacy and accessibility drafts, and the 404 page), at 1440 px and 375 px, with every dated blog post live (`BLOG_NOW=2027-03-09`). **Result:** no remaining failures found; three were found and fixed.

## How it was checked
- **Automated:** axe-core 4.10 with the WCAG 2.0, 2.1 and 2.2 A/AA rules and best practices, after scrolling each page so the range bars draw.
- **Contrast over images and gradients** (64 elements axe can't compute): measured from rendered pixels with the text hidden, against the text's actual color, ignoring borders, underlines and the most extreme 3% of pixels. All pass; the lowest is "Find your part" over the desktop hero photo at 5.09:1 (needs 4.5:1).
- **By hand, scripted:** page language, one `main` and one `h1` per page, unique titles; the skip link; reflow at 320 px (1.4.10); WCAG text spacing at 320 px (1.4.12); focus not hidden by the sticky header or section bars (2.4.11), tabbing through four long pages at both widths; the desktop dropdowns (Enter, Tab, Escape, hover then Escape: 1.4.13) and the phone menu; disclosures; link text; reduced motion.

## Fixed
| # | Criterion | Problem | Fix |
|---|-----------|---------|-----|
| 1 | 2.1.1 Keyboard | Tables in posts scroll sideways on phones, but the scroll area couldn't be reached by keyboard | Each table sits in a focusable region named after the question it answers (`BaseLinks`, `.table-scroll`) |
| 2 | 2.4.11 Focus Not Obscured, 2.4.3 Focus Order | With the phone menu open, Tab went past the menu into page links hidden under its backdrop | The skip link, `main` and the footer are `inert` while the menu is open (`Header.astro`) |
| 3 | 1.4.12 Text Spacing | With a reader's wider letter spacing at 320 px, the Governance heading's longest word was cut off at the screen edge | Headings let an over-long word break (`overflow-wrap: break-word`); normal text is unaffected |

## Already in place
Skip link; landmarks; one `h1` per page and ordered headings; native `details` for expanding sections; dropdowns as disclosure buttons with `aria-expanded` that close on Escape and return focus; visible focus ring; 44 px social icon targets with names; decorative bars and dots hidden from screen readers with their meaning in text; reduced motion turns the range-bar animation off; no content that flashes, moves on its own beyond the one-time range bars, or times out; no forms.

## Not covered
- Real assistive technology (VoiceOver, NVDA, JAWS) and real Safari: worth a pass before launch, especially the phone menu and the pinned hero (`HomeHero`), which uses Safari-specific compositing.
- Third-party pages the site links to (LinkedIn, Facebook, X).
- Press release graphics: their text is transcribed in `imageAlt` (CLAUDE.md), not re-checked here.

## Keep it this way
Re-run the scan after significant UI changes (the scripts used are in the session that made this review; axe-core can be run the same way from any Playwright script). The accessibility statement (`/accessibility`, draft) names the target; this review supports WCAG 2.2 AA.
