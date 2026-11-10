# 07 — Open Questions

Items requiring stakeholder input or decisions before full launch.

## Branding & Identity
- [ ] **Logo:** A PNG (300×128) was provided and is in use (`public/images/fsic-logo.png`, plus a dark-background version). Still need an SVG or a larger source so it stays sharp at larger sizes.
- [ ] **Favicon:** Derived from logo. Need source file.
- [x] **Typography:** Resolved. Barlow Semi Condensed, Source Serif 4 and Archivo, self-hosted (see `DESIGN.md`).
- [ ] **Photography / Imagery:** No approved photos provided. Need hero images, section backgrounds, campus renderings if available. What are the usage rights for conceptual renderings referenced in the PDFs?
- [ ] **Press release graphics:** the four graphics from fsic.space/news are in use on `/news` (November 2026). Confirm FSIC owns them, and check two details: the Jessie Thompson graphic says "Executive Board" (the release says Board of Directors), and the Trine and DePew graphics show a building signed "Florida Space Innovation Center", which does not exist yet. See `src/content/copy/news.md`.
- [ ] **Brand guidelines:** Are there existing brand guidelines beyond the color palette provided?

## Content & Copy
- [ ] **Stakeholder CTA priorities:** Which call-to-action should be most prominent — partner inquiry, general contact, or specific program interest? (November 2026: the home hero's primary button is now Get Involved, to Partnership & Funding, in place of Explore the Vision; confirm.)
- [ ] **Contact handling:** How should contact form submissions be routed? Email? CRM? Which email addresses? (Until decided, `/contact` opens an email to info@fsic.space with a subject per topic.)
- [x] **News / Updates section:** resolved. `/news` publishes the press releases, one file per release. The old Wix blog posts are not migrated.
- [ ] **Partner logos:** Are there approved partner organizations whose logos can be displayed? (Do not fabricate.)
- [ ] **Testimonials / Endorsements:** Are there approved quotes from stakeholders to include?
- [ ] **Economic scenario:** The headline economic figures are the Master Plan's FSIC 2.0 scenario. Should the home page say so? (November 10, 2026: the homepage now says so, "with full implementation (the Master Plan's FSIC 2.0 scenario)", marked ⚠ Review in `home.md`; confirm or remove.) And are two chart values right: job-years for FSIC 1.0 (same as Baseline) and "City + County" fiscal impact? See `08-current-site-audit.md` §3.10.

## Technical & Infrastructure
- [x] **Domain:** resolved (November 2026). fsic.space, the current Wix site's domain, will point to this site. Steps in `06-launch-plan.md` ("Switching to fsic.space").
- [ ] **Hosting provider:** GitHub Pages, where the build deploys now, unless decided otherwise. Confirm, since it can't do server redirects (see Redirects below).
- [ ] **When to switch:** the date fsic.space moves from Wix to this site.
- [ ] **Analytics:** Google Analytics 4? Plausible? Other?
- [ ] **Redirects from fsic.space:** built (November 2026): 18 old Wix addresses forward to their new pages (`redirects` in `astro.config.mjs`; `docs/13` B4). **⚠ Review the mapping:** /about-4 and /1-why-we-are-building-the-fsic → The Strategic Moment; /copy-of-news-media → FAQ; /about-7, /blog, /event-list → News; /talent, /innovation, /market, /civic → that engine on the Model page; /john-joaquin, /leadership → Governance; /book-online, /challenges → Programs & Facilities; /copy-of-home, /copy-of-home-1, /general-clean, /coming-soon-03 → Home. Not redirected: the Wix wildcard pages (/post/…, /service-page/…, /event-details/…, /challenge-page/…), whose slugs would need listing from the live site, and the template legal pages (/blank…). Those land on the 404 page.
- [x] **Search indexing before launch:** resolved (November 2026). The preview is kept out of search and AI answers: every page is `noindex` and robots.txt disallows crawling, until `site` is https://fsic.space (`src/lib/seo.ts`, `INDEXABLE`). The sitemap (`/sitemap.xml`) and robots.txt are generated at build time.
- [x] **Default share image:** resolved (November 2026). Pages without their own use the homepage hero photo (`BaseLayout`); press releases use their graphic.
- [ ] **Form backend:** What service for contact form submissions? (Netlify Forms, Formspree, custom API?)
- [ ] **Email newsletter:** Will there be a mailing list signup? If so, which provider? (Mailchimp, ConvertKit, etc.)

## Legal & Compliance
- [x] **Tax status:** resolved (November 2026). The IRS determination letter (October 20, 2026) confirms Florida Space Innovation Center Inc is a 501(c)(3) public charity, effective July 1, 2026, with deductible contributions. The footer and Partnership & Funding now state the status and EIN (`src/lib/site.ts`, `ORG`).
- [ ] **Florida charitable-solicitation registration:** confirm whether FSIC is registered with FDACS (Chapter 496, Florida Statutes), and its number. Until then the site asks for no donations. When the number is set (`ORG.floridaRegistration`), the state's disclosure appears in the footer and on Partnership & Funding automatically. If the site later takes online donations, ask counsel which other states require registration.
- [ ] **Annual Form 990:** FSIC's fiscal year runs July 1 to June 30. Confirm with its CPA when the first return is due (likely November 15, 2027, for the year ending June 30, 2027), and post each return on the Governance page when filed. Missing three years in a row revokes the exemption automatically.
- [ ] **Public support and unrelated income (509(a)(2)):** FSIC must keep more than a third of its support from gifts, grants and fees from mission-related activities, and no more than a third from investment and unrelated business income. Ask the CPA to review the planned funding streams (Partnership & Funding): training tuition and contract training are likely related; facility rentals, startup incubation fees and employer memberships need a look for unrelated business income tax.
- [ ] **Donor acknowledgments:** a written acknowledgment for each gift of $250 or more, and a disclosure of the deductible part for any payment over $75 that buys something (an event ticket).
- [ ] **Board policies:** a written conflict-of-interest policy with recusal (the board includes elected officials and a company CEO), and documented approval of any officer pay, as Form 990 asks. The Governance page already lists "Conflict-of-interest disclosures" under Compliance.
- [ ] **Public disclosure:** the determination letter, the exemption application and the three latest Form 990s must go to anyone who asks; the Governance page offers them by email. Decide whether to post the letter with the address redacted.
- [ ] **Privacy policy:** Required if collecting any user data (analytics, forms).
- [ ] **Terms of use:** Needed before launch?
- [ ] **Cookie consent:** Required if using analytics cookies.
- [ ] **ADA compliance statement:** Should the site include an accessibility statement page?

## Future Features
- [ ] **Public dashboards:** The Master Plan references public dashboards with program metrics (Page 31). What data will be available at launch?
- [ ] **Events calendar:** Should the site have an events listing?
- [ ] **Document downloads:** Should any reports or documents be available for download?
- [ ] **Multi-language support:** Is Spanish or other language support needed?
- [ ] **Interactive timeline:** Should the phased deployment page include an interactive visualization?

## Stakeholder Review
- [ ] **Review cycle:** Who are the designated reviewers for content sign-off?
- [ ] **Approval process:** How many rounds of review before launch?
- [ ] **Content update process:** Post-launch, who updates the site? Will they need a CMS?

## Content Conflicts from the Current Site Audit
Decisions needed before copy can be approved. Details are in `08-current-site-audit.md` §3.
- [x] **Development figures:** resolved (November 2026). The site uses the Master Plan's single-development figures (more than 10,000 homes, over 10 million sq ft, pp. 4 and 6), without naming the development. Used on The Strategic Moment page.
- [x] **Economic figures:** resolved. The home and Economic Impact pages show ranges. (Related open item: which scenario the figures describe, under Content & Copy.)
- [x] **Location:** resolved (November 2026). The site does not name a campus site; it keeps the current "site to be determined collaboratively" position.
- [x] **Phases:** resolved. Five phases (Master Plan), used on the Deployment page and in the FAQ answer.
- [x] **Unsourced claims:** resolved (November 2026). The space-economy figure is cited to WEF and McKinsey (April 2024: $630B in 2023, $1.8T by 2035) and the FAQ uses those figures. The SpaceX S-1 "$28.5T" sentence is removed: it is SpaceX's own addressable market, mostly AI, not a space-economy projection. 30–50% earned revenue by Year 3 and "billions" in federal funding are confirmed in the Master Plan. Confirm the FAQ wording (`faq.md`).
- [ ] **Titles:** confirm current titles for John Joaquin and Erik Ahlgren, and the full seated board. (November 10, 2026: the homepage lists the board and Founders Council members FSIC's releases announced, with the releases' roles; confirm.)
- [x] **Mission and vision:** they open the FAQ page, as on the live site (November 2026). They can move later.
- [ ] **New pages:** News and FAQ are built (November 2026). Still to decide: Leadership (its own page or part of Governance)?
