# 05 — SEO & Accessibility

## SEO Strategy

### Title Template
`{Page Title} | Florida Space Innovation Center`

Example: `Economic Impact | Florida Space Innovation Center`

### Meta Descriptions
Each page should have a unique meta description (150–160 characters) derived from the page's primary goal statement in `02-information-architecture.md`.

**Home:** "The Florida Space Innovation Center is a coordinated regional platform strengthening workforce, innovation, and economic growth for Southeast Volusia and the Space Coast."

### Open Graph Tags
Every page must include:
- `og:title` — Same as page title
- `og:description` — Same as meta description
- `og:type` — `website`
- `og:url` — Canonical URL
- `og:image` — TBD (placeholder until brand imagery is finalized)
- `og:site_name` — `Florida Space Innovation Center`

### Twitter Card Tags
- `twitter:card` — `summary_large_image`
- `twitter:title`, `twitter:description`, `twitter:image` — Mirror OG tags

### Sitemap
Astro generates a sitemap automatically when configured. Enable `@astrojs/sitemap` before launch.

### Robots
Allow full indexing. No pages should be `noindex` at launch.

### Structured Data
Consider adding `Organization` schema markup for the homepage:
- Name, description, URL, logo, founding date, contact info

## Accessibility

### Standards
Target **WCAG 2.1 Level AA** compliance.

### Checklist
- [ ] All images have descriptive `alt` attributes
- [ ] Heading hierarchy is sequential (no skipped levels)
- [ ] All interactive elements are keyboard-accessible
- [ ] Focus indicators are visible on all focusable elements
- [ ] Color is not the sole means of conveying information
- [ ] Text contrast meets 4.5:1 (normal) / 3:1 (large) ratios
- [ ] Links have descriptive text (no "click here")
- [ ] Page language is declared (`lang="en"`)
- [ ] Skip-to-content link is present
- [ ] Forms have associated labels
- [ ] ARIA landmarks are used correctly (`main`, `nav`, `footer`)
- [ ] Mobile touch targets are at least 44x44px

### Testing Tools
- axe DevTools (browser extension)
- Lighthouse accessibility audit
- Manual keyboard navigation testing
- Screen reader testing (NVDA or VoiceOver)
