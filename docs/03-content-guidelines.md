# 03 — Content Guidelines

## Voice & Tone

### Character
- **Institutional** — This is a regional anchor institution, not a startup.
- **Measured** — Every claim is grounded in analysis or documented plan.
- **Credible** — Data-forward, source-referenced, no speculation.
- **Inclusive** — Speaks to employers, educators, policymakers, and residents equally.

### Avoid
- Startup hype words: "disrupt," "revolutionary," "game-changing," "cutting-edge," "world-class"
- Superlatives without data backing
- Jargon without context
- Passive voice where active is clearer
- Exclamation marks

### Prefer
- Active, declarative sentences
- Concrete numbers over vague claims
- "Strengthens" over "transforms" (unless contextually precise)
- "Coordinated" over "innovative" as a descriptor
- Short paragraphs with generous whitespace

## Heading Hierarchy
- **H1:** Page title. One per page.
- **H2:** Major section headings (e.g., "The Economic Case"). In spec sections, each item's name is the H2 (e.g., the engine names on the Model page; see `DESIGN.md` "Interior page template").
- **H3:** Subsection headings (e.g., engine names in the home page's four-engine overview).
- **H4:** Rarely used; reserved for deeply nested content.

## Data Presentation
- All economic figures must match the PDFs exactly (see `01-source-materials.md`).
- Use en-dash for ranges: "$10.2–$12.4 billion" not "$10.2-$12.4 billion."
- Use comma separators for large numbers: "74,500" not "74500."
- Currency: "$X.X billion" or "$X.XX billion" for billions and "$XXX million" for millions, with the decimals the source uses ("$10.2–$12.4 billion", "$1.35–$1.55 billion").

## CTA Language
- Use imperative verbs: "Explore," "View," "Review," "Learn," "Become," "Contact."
- Primary CTAs: action-oriented, tied to next logical step.
- Secondary CTAs: softer, informational ("Learn More About…").

## Nonprofit Rules (501(c)(3))

FSIC is a 501(c)(3) public charity (IRS determination letter, October 20, 2026). What the site says is FSIC speaking, so these rules apply to every page, release and post. When in doubt, ask FSIC's counsel before publishing.

### Political campaigns: never
- No support for or opposition to any candidate for public office, in words, links, images or event listings. This is an absolute ban; there is no small amount that is allowed.
- No links to candidates' campaign sites. Link to an official's government page instead.
- Board members who hold office (a mayor, a school board member) are named by their public role only. Don't feature them in the run-up to their own elections, and don't use their FSIC role to promote a campaign.
- Voter education is allowed only if it is non-partisan and covers all candidates; check with counsel first.

### Lobbying: limited and tracked
- Asking a legislative body (Congress, the Legislature, a city or county commission) to pass or defeat specific legislation, or asking the public to contact officials about it, is lobbying. A public charity may lobby only as an insubstantial part of its activity, so every instance is approved and tracked.
- Describing what partners do ("local government aligns zoning and infrastructure") and sharing non-partisan analysis (the Master Plan's figures) is not lobbying.

### No private benefit
- The site serves FSIC's charitable purpose, not any business, developer or individual. Don't promote a partner's products, a specific development or a board member's company. Name an affiliation (Ryan Trine, CEO of R3Doubt) as a fact, not as an endorsement.

### Recognizing sponsors and funders
- A sponsor may be thanked by name, logo, neutral description of what they do, and a link to their site (a "qualified sponsorship payment").
- Don't add qualitative or comparative language ("the region's best employer"), prices, endorsements, or calls to buy or visit: that turns recognition into advertising, and the payment can become taxable business income.
- Logos appear only with the partner's written permission (see Attribution).

### Asking for money
- No donation request (a donate button, "support our work", a giving page) until FSIC's Florida charitable-solicitation registration is confirmed. The site then shows the state's disclosure automatically (`ORG.floridaRegistration` in `src/lib/site.ts`).
- Say "tax-deductible to the extent allowed by law", never "fully deductible": a gift that comes with a benefit (an event ticket, a meal) is deductible only above the benefit's value.

## Attribution
- Do not fabricate partner logos, testimonials, or quotes.
- All economic data must be traceable to the source PDFs.
- When in doubt, omit rather than invent.

## Accessibility
- All images require descriptive alt text.
- Color contrast must meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text).
- Heading hierarchy must be logical and sequential.
- Interactive elements must be keyboard-navigable.
- Links must have descriptive text (not "click here").
