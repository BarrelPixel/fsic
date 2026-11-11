# Site-Wide Copy

**Status:** Draft
**Last Updated:** November 2026
**Applies to:** Header, footer, default metadata, 404 page, legal pages
**Sources:** Current new-site components (`Header.astro`, `Footer.astro`, `BaseLayout.astro`); fsic.space footer

---

## DEFAULT META DESCRIPTION

The Florida Space Innovation Center is a coordinated regional platform strengthening workforce, innovation, and economic growth for Southeast Volusia and the Space Coast.

> **Source:** `BaseLayout.astro` (current new site)

---

## SEARCH AND ANSWER ENGINES

> **Added (November 10, 2026, `docs/13-refactor-seo-aeo.md` Part B).** Not shown on the pages; read by search engines, answer engines and link previews. **⚠ Review:** all new wording below.

**What FSIC is (one sentence; `WHAT_IS_FSIC` in `src/lib/seo.ts`):** A 501(c)(3) nonprofit in New Smyrna Beach building workforce, innovation and industry partnerships so the Space Coast's growth benefits Southeast Volusia.
Used as: the homepage's meta description; the description in FSIC's structured data (schema.org NGO); the summary at the top of `/llms.txt`.

**Homepage title:** Florida Space Innovation Center | Southeast Volusia, Space Coast (was "Florida Space Innovation Center").

**Shorter descriptions (search results cut at about 155 characters):**
- Long-Term Vision: FSIC's 2032–2040 vision: a multi-university consortium, a performing arts center, and a landmark campus for Southeast Volusia.
- Programs & Facilities: FSIC's programs for students, adults, businesses and the community across four engines, and its phased facilities plan.

**`/llms.txt`** (a guide for AI assistants): the sentence above, then key facts drawn from the site's data (legal name, status and EIN; New Smyrna Beach and the region served; the launch date; the four engines; the 25-year ranges with the scenario and the disclaimer; the email), then links to every page and FAQ answer.

**Press release titles** no longer add " | Florida Space Innovation Center" (each headline already names FSIC).

---

## PAGE ENDINGS (interior pages)

> **Added (November 11, 2026, `docs/23` S2, S3, S5).** Under each interior page's closing buttons (`Closing`, `src/data/onward.ts`). **⚠ Review:** the three labels.

**Questions about this:** two FAQ questions that belong to the page, each linking to its answer.
**Read more:** up to three published blog posts on the page's topics.
**Next:** the next page in the site's story, with an arrow: The Strategic Moment → Economic Impact → The FSIC Model → Phased Deployment → Programs & Facilities → Governance → Get Involved; Long-Term Vision → Get Involved.

---

## FOOTER

**Name:** Florida Space Innovation Center
**Location line:** Southeast Volusia County, Florida
**Tagline:** A coordinated regional platform strengthening workforce, innovation, and economic growth for the Space Coast.

**Contact:** info@fsic.space · New Smyrna Beach, FL, USA

**Social:** [TODO: add to `Footer.astro`. Not in the new build yet.]
- LinkedIn — https://www.linkedin.com/company/florida-space-innovation-center/
- Facebook — https://www.facebook.com/profile.php?id=61589280681125
- X — https://x.com/FLSpaceCenter

**Legal line:** © {year} Florida Space Innovation Center Inc. All rights reserved. A 501(c)(3) nonprofit organization, EIN 43-2277165.

> **Source:** IRS determination letter (Letter 947), October 20, 2026: Florida Space Innovation Center Inc is exempt under IRC 501(c)(3) as a public charity (509(a)(2)), effective July 1, 2026; contributions are deductible under IRC 170. The name, status and EIN are defined once in `src/lib/site.ts` (`ORG`). The letter's mailing address (care of an individual) is not published. **Confirmed (November 10, 2026):** FSIC confirmed the legal name's form, "Florida Space Innovation Center Inc.".
**Credit:** Built by Barrel & Pixel

> **Source:** New-site footer, plus contact and social details from the fsic.space footer.

---

## PAGE NOT FOUND (404)

Shown for any address on the site that has no page, including old fsic.space addresses once the new site replaces it.

**Meta title:** Page Not Found
**Meta description:** The page you were looking for could not be found on the Florida Space Innovation Center website.
**Headline:** Page Not Found
**Lead:** The page you were looking for may have moved, or the address may be mistyped.
**Aside:** If you followed a link to fsic.space, the site has been rebuilt and some addresses have changed.

**Section statement (label column):** Where to go from here
**Links:** every page in the site navigation, grouped as in the menus (read from `src/lib/nav.ts`, so it stays in sync).
**Closing line:** Still can't find it? Email info@fsic.space and we will point you in the right direction.
**CTA:** Return to the Homepage

> **⚠ Review:** New copy, written for the rebuilt site. The aside fits the plan to point fsic.space at the new site (confirmed November 2026).

---

## NEWSLETTER SIGNUP

**Current site:** "Connect With Us". Fields: Email (required), checkbox "Yes, subscribe me to your newsletter." (required). Button: "Subscribe".

> **⚠ Review:** Decide whether the new site keeps a newsletter signup, and with which provider (see `07-open-questions.md`). Existing subscribers live in Wix, so plan to export them.

---

## LEGAL PAGES

| Page | Current fsic.space | Status |
|------|--------------------|--------|
| Privacy Policy | Unedited Wix template | [TODO: needs real policy before launch if forms or analytics are used] |
| Accessibility Statement | Unedited Wix template with placeholders | [TODO: can draft from `05-seo-accessibility.md` once WCAG level is confirmed] |
| Terms & Conditions | Unedited Wix template | [TODO] |
| Refund Policy | Unedited Wix template | Likely not needed (no paid services) |

> **⚠ Review:** All four legal pages on the live site are linked from the footer but contain only template text. Fixing them on the current site may be worth doing before the new site launches.
