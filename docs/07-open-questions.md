# 07 — Open Questions

Items requiring stakeholder input or decisions before full launch.

## Branding & Identity
- [ ] **Logo:** A PNG (300×128) was provided and is in use (`public/images/fsic-logo.png`, plus a dark-background version). Still need an SVG or a larger source so it stays sharp at larger sizes.
- [ ] **Favicon:** Derived from logo. Need source file.
- [x] **Typography:** Resolved. Barlow Semi Condensed, Source Serif 4 and Archivo from Google Fonts (see `DESIGN.md`).
- [ ] **Photography / Imagery:** No approved photos provided. Need hero images, section backgrounds, campus renderings if available. What are the usage rights for conceptual renderings referenced in the PDFs?
- [ ] **Press release graphics:** the four graphics from fsic.space/news are in use on `/news` (November 2026). Confirm FSIC owns them, and check two details: the Jessie Thompson graphic says "Executive Board" (the release says Board of Directors), and the Trine and DePew graphics show a building signed "Florida Space Innovation Center", which does not exist yet. See `src/content/copy/news.md`.
- [ ] **Brand guidelines:** Are there existing brand guidelines beyond the color palette provided?

## Content & Copy
- [ ] **Stakeholder CTA priorities:** Which call-to-action should be most prominent — partner inquiry, general contact, or specific program interest?
- [ ] **Contact handling:** How should contact form submissions be routed? Email? CRM? Which email addresses? (Until decided, `/contact` opens an email to info@fsic.space with a subject per topic.)
- [x] **News / Updates section:** resolved. `/news` publishes the press releases, one file per release. The old Wix blog posts are not migrated.
- [ ] **Partner logos:** Are there approved partner organizations whose logos can be displayed? (Do not fabricate.)
- [ ] **Testimonials / Endorsements:** Are there approved quotes from stakeholders to include?
- [ ] **Economic scenario:** The headline economic figures are the Master Plan's FSIC 2.0 scenario. Should the home page say so? And are two chart values right: job-years for FSIC 1.0 (same as Baseline) and "City + County" fiscal impact? See `08-current-site-audit.md` §3.10.

## Technical & Infrastructure
- [ ] **Hosting provider:** Where will the production site be hosted? (The build currently deploys to GitHub Pages under `/fsic` for review. Vercel, Netlify, AWS, other?)
- [ ] **Domain:** What is the production domain? (e.g., `fsic.org`, `floridaspaceinnovation.org`, etc.)
- [ ] **Analytics:** Google Analytics 4? Plausible? Other?
- [ ] **Form backend:** What service for contact form submissions? (Netlify Forms, Formspree, custom API?)
- [ ] **Email newsletter:** Will there be a mailing list signup? If so, which provider? (Mailchimp, ConvertKit, etc.)

## Legal & Compliance
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
- [ ] **Titles:** confirm current titles for John Joaquin and Erik Ahlgren, and the full seated board.
- [x] **Mission and vision:** they open the FAQ page, as on the live site (November 2026). They can move later.
- [ ] **New pages:** News and FAQ are built (November 2026). Still to decide: Leadership (its own page or part of Governance)?
