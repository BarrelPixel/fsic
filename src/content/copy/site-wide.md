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

## FOOTER

**Name:** Florida Space Innovation Center
**Location line:** Southeast Volusia County, Florida
**Tagline:** A coordinated regional platform strengthening workforce, innovation, and economic growth for the Space Coast.

**Contact:** info@fsic.space · New Smyrna Beach, FL, USA

**Social:** [TODO: add to `Footer.astro`. Not in the new build yet.]
- LinkedIn — https://www.linkedin.com/company/florida-space-innovation-center/
- Facebook — https://www.facebook.com/profile.php?id=61589280681125
- X — https://x.com/FLSpaceCenter

**Legal line:** © {year} Florida Space Innovation Center. All rights reserved.
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
