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
| August 3, 2026 | `2026-08-03-jake-johansson-joins-founders-council.md` |
| July 29, 2026 | `2026-07-29-ryan-trine-joins-board.md` |
| July 13, 2026 | `2026-07-13-diezel-depew-joins-board.md` |
| July 7, 2026 | `2026-07-07-jessie-thompson-joins-board.md` |
| May 25, 2026 | `2026-05-25-fsic-launches-on-may-25.md` |

> **Source:** fsic.space/news (verbatim). Checked November 8, 2026: no releases newer than July 29.
> **August 3 release (Jake Johansson, Founders Council):** text and graphic supplied by the project lead (November 8, 2026), not taken from fsic.space. Added as supplied; the only changes are the bold dateline and ordinary hyphens in place of non-breaking ones ("county-level", "fastest-growing", "long-term", "forward-looking").
> **⚠ Review:** The Founders Council is now named on the homepage and the Governance page (Jake Johansson), but nothing says what it is or does. Describe it in `governance.md` if it is a standing body.
> **Note:** The releases use words the content guidelines avoid ("proud to announce", "premier hub"). They stay as published.
> **Images:** each release shows the graphic published with it on fsic.space/news (November 2026). The files are in `src/content/news/images/`, set by `image` and `imageAlt` in each release's frontmatter. The alt text transcribes the words in the graphic.

> **⚠ Review:** The Trine and DePew graphics show a building signed "Florida Space Innovation Center" next to a rocket, and FSIC has no building yet. Confirm these graphics should stay, and that FSIC owns them.

> **Resolved (November 11, 2026):** the Jessie Thompson graphic says "Executive Board"; the release says "Board of Directors". The graphic stays as FSIC published it (DESIGN.md: release graphics aren't altered); the site's own text uses the release's "Board of Directors".

---

## LIST PAGE

**Headline:** News & Media

**Lead:** Press releases from the Florida Space Innovation Center, newest first.

**Aside:** Media inquiries: info@fsic.space

> **⚠ Review:** Lead and aside are new. The media contact uses the general address rather than a named person until titles are confirmed (audit §3.6, §3.8).

Each row shows the date, the headline (linking to the release) and the release's first sentence, without its dateline (`firstSentence()` in `src/lib/news.ts`; initials such as "U.S." don't end a sentence). On wide screens, a thumbnail of the release graphic, all at one height, sits under the date and also links to the release.

---

## RELEASE PAGE

Headline, then "<date> · Press release", the release graphic beside the text (after it on small screens, so the text comes first; also the page's share image), the release text, a link back to "All news and media", and a "More news" list of the other releases. The meta description is the first paragraph, shortened to about 155 characters.

---

## BOILERPLATE

> **Resolved (November 11, 2026):** use the newer (July 7) paragraph as the standard boilerplate for future releases. Published releases stay as published.
