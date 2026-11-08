# Site-Wide Copy

**Status:** Draft
**Last Updated:** November 2026
**Applies to:** Header, footer, default metadata, legal pages
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
