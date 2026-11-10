# 06 — Launch Plan

**Target Launch Date:** May 25, 2026

> **Out of date (November 2026):** the target date has passed and the weekly plan below no longer reflects progress. Built so far: Home, The FSIC Model, Economic Impact, Phased Deployment, Governance & Transparency, Partnership & Funding, The Strategic Moment, Programs & Facilities, Long-Term Vision, FAQ, News & Media, Contact (no form yet), and the 404 page. A new target date is needed before this plan is rewritten. The QA checklist below still applies.

## Switching to fsic.space

fsic.space, now the Wix site's domain, will point to this site on GitHub Pages. **Search indexing turns on with the switch:** while `site` is the GitHub Pages preview, every page is `noindex` and robots.txt disallows crawling (`src/lib/seo.ts`, `INDEXABLE`). Setting `site` to `https://fsic.space` makes the pages indexable, points robots.txt at the sitemap, and makes the canonical URLs, sitemap and structured data use fsic.space. After the switch, submit `https://fsic.space/sitemap.xml` in Google Search Console and Bing Webmaster Tools, and validate a page with the Rich Results Test. The code is ready: every internal link goes through `url()` (`src/lib/url.ts`), and a build for the root of the domain passes the link check (`npx astro build --base / --site https://fsic.space`, then `node scripts/check-links.mjs dist --base /`).

1. **Before touching DNS:** note every DNS record on fsic.space, above all the **MX** (and any SPF, DKIM or verification TXT) records, so email to info@fsic.space keeps working. Export the Wix newsletter subscribers (`site-wide.md`).
2. **GitHub:** in the organization settings, verify fsic.space (Pages → Verified domains), so no other repository can claim it. In the repository's Settings → Pages, set the custom domain to `fsic.space`. With the Actions deploy, no `CNAME` file is needed.
3. **DNS** (at the registrar, or wherever Wix manages the zone): for `fsic.space`, A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and AAAA `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`); for `www`, a CNAME to `barrelpixel.github.io`. Keep the MX and TXT records. Disconnect the domain from the Wix site.
4. **`astro.config.mjs`:** set `site` to `'https://fsic.space'` and remove `base`. Commit and push to `main`; the deploy checks types and links.
5. **After the certificate is issued** (minutes to a day): tick "Enforce HTTPS" in Settings → Pages. Check `https://fsic.space`, `https://www.fsic.space`, a page, a press release and a missing address (the 404 page).
6. **Old Wix addresses:** until redirects are added (`07-open-questions.md`), they land on the 404 page, which points visitors onward.

## 3-Month Weekly Plan

### Month 1: Foundation (Weeks 1–4)

| Week | Tasks |
|------|-------|
| **Week 1** (Feb 24) | Project scaffold, design system, documentation, Home page build |
| **Week 2** (Mar 2) | Home page polish, responsive QA, component library finalization |
| **Week 3** (Mar 9) | Strategic Moment + FSIC Model pages build |
| **Week 4** (Mar 16) | Economic Impact + Phased Deployment pages build |

### Month 2: Interior Pages (Weeks 5–8)

| Week | Tasks |
|------|-------|
| **Week 5** (Mar 23) | Programs & Facilities + Governance pages build |
| **Week 6** (Mar 30) | Partnership & Funding + Long-Term Vision pages build |
| **Week 7** (Apr 6) | Contact page build (form integration), navigation finalization |
| **Week 8** (Apr 13) | Cross-page consistency pass, content review with stakeholders |

### Month 3: Polish & Launch (Weeks 9–13)

| Week | Tasks |
|------|-------|
| **Week 9** (Apr 20) | SEO implementation (meta tags, OG, sitemap, structured data) |
| **Week 10** (Apr 27) | Accessibility audit and remediation |
| **Week 11** (May 4) | Performance optimization (images, fonts, Core Web Vitals) |
| **Week 12** (May 11) | Hosting setup, DNS, SSL, analytics integration |
| **Week 13** (May 18) | Final QA, stakeholder sign-off, soft launch / staging review |
| **Launch** (May 25) | Go live |

## QA Checklist

### Content
- [ ] All copy matches approved content documents
- [ ] No placeholder text ("Lorem ipsum", "Coming soon" on live pages)
- [ ] All economic figures match source PDFs exactly
- [ ] No fabricated logos, quotes, or partner names
- [ ] Contact information is correct and functional

### Visual & Responsive
- [ ] All pages render correctly at 320px, 768px, 1024px, 1440px widths
- [ ] No horizontal scrollbars at any breakpoint
- [ ] Images are properly sized and not stretched
- [ ] Animations/transitions are smooth and non-distracting
- [ ] Dark-on-light and light-on-dark text is legible

### Functionality
- [ ] All internal links work (no 404s). Checked on every deploy by `npm run check-links`; a broken link stops the deploy
- [ ] All CTAs link to correct destinations
- [ ] Navigation highlights current page
- [ ] Mobile menu opens/closes correctly
- [ ] Contact form submits successfully (when implemented)
- [ ] Skip-to-content link works

### Performance
- [ ] Lighthouse Performance score > 90
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Input Delay < 100ms
- [ ] Images use modern formats (WebP/AVIF) where supported
- [ ] No render-blocking resources (fonts are self-hosted and preloaded; only the site's own stylesheet blocks rendering)

### SEO
- [ ] Every page has unique `<title>` and `<meta name="description">`
- [ ] Open Graph tags are present on all pages
- [x] Canonical URLs are set (`BaseLayout`, from `site` in `astro.config.mjs`: update `site` and `base` for the production domain)
- [ ] Sitemap is generated and accessible
- [ ] robots.txt allows indexing
- [ ] Structured data validates in Google's Rich Results Test

### Accessibility
- [ ] WCAG 2.1 AA compliance verified (axe DevTools)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader testing passed (NVDA or VoiceOver)
- [ ] Color contrast meets required ratios
- [ ] All images have alt text
- [ ] Heading hierarchy is correct

### Infrastructure
- [ ] SSL certificate is active
- [ ] DNS propagation is complete
- [x] 404 page is styled and helpful (`src/pages/404.astro`; its copy in `site-wide.md` still needs review)
- [ ] Analytics tracking is active
- [ ] Redirects are configured (if migrating from existing site). Old fsic.space addresses (`08-current-site-audit.md` §1) land on the 404 page until redirects are set up; GitHub Pages can't do server redirects, so this depends on the production host
