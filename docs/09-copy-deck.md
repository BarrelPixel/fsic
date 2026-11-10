# 09 — Copy Deck

All website copy lives in `src/content/copy/`, with one Markdown file per page. These files are the source of truth for wording. Write and approve copy here first, then build it into the `.astro` page.

## Files

| File | Page | Status |
|------|------|--------|
| `home.md` | `/` | Approved; the Track B changes (hero, Where You Fit, economic headline, people, follow line; `10-homepage-plan.md`) and the November 2026 review's new lines are marked ⚠ Review |
| `strategic-moment.md` | `/strategic-moment` | Draft |
| `model.md` | `/model` | Draft |
| `economic-impact.md` | `/economic-impact` | Draft |
| `deployment.md` | `/deployment` | Draft |
| `programs-facilities.md` | `/programs-facilities` | Draft |
| `governance.md` | `/governance` | Draft |
| `partnership-funding.md` | `/partnership-funding` | Draft |
| `long-term-vision.md` | `/long-term-vision` | Draft |
| `contact.md` | `/contact` | Draft |
| `faq.md` | `/faq` | Draft |
| `news.md` | `/news` (releases in `src/content/news/`, one file each) | Draft |
| `blog.md` | `/blog` (posts in `src/content/blog/`, one file each, each with its own `status`; `docs/14`) | Draft; two posts drafted |
| `leadership.md` | `/leadership` (proposed) | Draft |
| `site-wide.md` | Header, footer, metadata, 404 page | Draft |

Update the table when a file's status changes.

## File Format

Every file starts with a header block:

```markdown
# <Page Name> Copy

**Status:** Not started | Draft | In review | Approved
**Last Updated:** <Month Year>
**Route:** /<path>
**Sources:** <where the copy came from>
```

Each section of the page is a `##` heading, with labeled fields in the same style as `home.md`:

```markdown
## SECTION NAME

**Headline:** …
**Body:** …
**CTA:** …
```

## Markers

| Marker | Meaning |
|--------|---------|
| `> **Source:** …` | Where this draft came from (a fsic.space URL or a Master Plan page). Keep it until the copy is approved. |
| `> **⚠ Review:** …` | A conflict or unverified claim. Resolve it before the file moves to In review. See `08-current-site-audit.md` §3. |
| `[TODO: …]` | Copy still to be written. It usually names the Master Plan pages to draw from. |
| `> **Source notes:** …` | Facts from `01-source-materials.md` to build new copy from. These are not finished copy. |

To find all the open work:

```bash
grep -rn "TODO\|⚠" src/content/copy/
```

## Workflow

1. **Not started / Draft.** Fill in the `[TODO]` items and edit the migrated copy to the voice in `03-content-guidelines.md`.
2. **In review.** No `[TODO]` or `⚠` markers remain. Send to the reviewers named in `07-open-questions.md` (Stakeholder Review).
3. **Approved.** Remove the `> Source` lines, set the status, and build the page from this file.

## Rules (from `03-content-guidelines.md`)

- Economic figures must match the source PDFs exactly, as ranges with en-dashes ("$10.2–$12.4 billion").
- Do not invent partners, quotes, testimonials, or logos. Press-release quotes may be reused as published.
- When unsure, leave it out.
