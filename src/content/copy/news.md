# News & Media Copy

**Status:** Draft
**Last Updated:** November 2026
**Route:** /news (built November 2026), plus one page per release at /news/<slug>
**Sources:** fsic.space/news

---

## PRESS RELEASES

Each release is its own Markdown file in `src/content/news/`, named `<YYYY-MM-DD>-<slug>.md`, with the headline and date in the frontmatter. The file name is the URL. To publish a new release, add a file; the list page and the "More news" links update themselves.

Keep the wording as published, including quotes. Fix only obvious formatting (bold subheads on their own line, one line per media-contact line). The current Wix blog posts (Dec 15, 2025) are **not** included. They are generic filler and should be retired (see audit §1).

| Date | File |
|------|------|
| July 29, 2026 | `2026-07-29-ryan-trine-joins-board.md` |
| July 13, 2026 | `2026-07-13-diezel-depew-joins-board.md` |
| July 7, 2026 | `2026-07-07-jessie-thompson-joins-board.md` |
| May 25, 2026 | `2026-05-25-fsic-launches-on-may-25.md` |

> **Source:** fsic.space/news (verbatim). Checked November 8, 2026: no releases newer than July 29.
> **Note:** The releases use words the content guidelines avoid ("proud to announce", "premier hub"). They stay as published.
> **Images:** each release shows the graphic published with it on fsic.space/news (November 2026). The files are in `src/content/news/images/`, set by `image` and `imageAlt` in each release's frontmatter. The alt text transcribes the words in the graphic.

> **⚠ Review:** The Jessie Thompson graphic says "Executive Board"; the release says "Board of Directors". The Trine and DePew graphics show a building signed "Florida Space Innovation Center" next to a rocket, and FSIC has no building yet. Confirm these graphics should stay.

---

## LIST PAGE

**Headline:** News & Media

**Lead:** Press releases from the Florida Space Innovation Center, newest first.

**Aside:** Media inquiries: info@fsic.space

> **⚠ Review:** Lead and aside are new. The media contact uses the general address rather than a named person until titles are confirmed (audit §3.6, §3.8).

Each row shows the date, the headline (linking to the release) and the release's first paragraph without its dateline. On wide screens, a thumbnail of the release graphic sits under the date.

---

## RELEASE PAGE

Headline, then "<date> · Press release", the release graphic beside the text (above it on small screens; also the page's share image), the release text, a link back to "All news and media", and a "More news" list of the other releases. The meta description is the first paragraph, shortened to about 155 characters.

---

## BOILERPLATE

> **⚠ Review:** The two "About FSIC" paragraphs above (July 7 and May 25) differ. Choose one standard boilerplate for future releases, and consider using it in the site footer or meta description.
