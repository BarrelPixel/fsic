# Analytics Setup Guide

**Created:** November 10, 2026  
**Status:** Framework ready, switched off. **Decided (November 11, 2026): Plausible**, switched on at the domain switch (`06-launch-plan.md`). It sets no cookies, so the site needs no consent banner. FSIC needs a Plausible account for fsic.space; then set `PUBLIC_ANALYTICS_ID` (any value) in the deploy's environment.
**Revised:** November 10, 2026, after review (see "Corrections" below).

## Overview

The FSIC website includes a flexible analytics framework that supports both Google Analytics 4 (GA4) and Plausible Analytics. The implementation is privacy-focused and respects user preferences.

## Privacy-First Approach

- **Off by default.** Nothing loads unless `PUBLIC_ANALYTICS_ID` is set, and only in production builds. With analytics off, pages make no requests to analytics providers (not even DNS hints).
- **Plausible is the default provider:** no cookies, no personal data, told the site's own domain automatically.
- **GA4 respects Do Not Track and Global Privacy Control:** when the browser sends either, GA4 isn't loaded at all. GA4 sets cookies, so it also needs a consent banner (not built) before it's used for EU visitors.
- **The Privacy Policy must change first.** `/privacy` is a draft that says the site has no analytics (`src/content/copy/privacy.md`). Before analytics is switched on, the policy names the service and what it collects, and is approved.

## Configuration

### Option 1: Google Analytics 4 (GA4)

**Pros:**
- Industry standard
- Comprehensive reporting
- Free for most use cases
- Google Search Console integration

**Cons:**
- Google data sharing policies
- Requires cookie consent (recommended)
- More complex privacy considerations

**Setup:**

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Set environment variables in GitHub repository settings:
   - `PUBLIC_ANALYTICS_ID` = your GA4 Measurement ID
   - `PUBLIC_ANALYTICS_PROVIDER` = `ga4`
4. Deploy and verify tracking in GA4 Real-Time reports

### Option 2: Plausible Analytics (Recommended)

**Pros:**
- Privacy-friendly (no cookies, GDPR compliant)
- Simple, lightweight (<1KB script)
- No impact on page speed
- EU-owned, GDPR compliant by default
- Clear, simple dashboards

**Cons:**
- Paid service ($9/month for 10K pageviews)
- Less detailed than GA4
- Requires separate subscription

**Setup:**

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain (`fsic.space`)
3. Set environment variables in GitHub repository settings:
   - `PUBLIC_ANALYTICS_ID` = your Plausible domain (`fsic.space`)
   - `PUBLIC_ANALYTICS_PROVIDER` = `plausible`
   - `PUBLIC_PLAUSIBLE_DOMAIN` = `fsic.space` (if different from auto-detect)
4. Deploy and verify tracking in Plausible dashboard

## Implementation Details

### Component Location
- **Analytics Component**: `src/components/Analytics.astro`
- **Integration**: `src/layouts/BaseLayout.astro` (included in `<head>`)
- **Privacy Policy**: `src/pages/privacy.astro`

### How It Works

1. **Environment Check**: Analytics only loads in production (`import.meta.env.PROD`)
2. **Provider Selection**: Framework automatically loads the correct provider based on `PUBLIC_ANALYTICS_PROVIDER`
3. **DNT and GPC respect (GA4)**: the GA4 loader returns without loading Google's script when Do Not Track or Global Privacy Control is on
4. **Privacy Policy first**: update `src/content/copy/privacy.md` and `/privacy` before switching analytics on

### Code Example

```typescript
// Environment variables (set in GitHub Actions secrets or .env.production)
PUBLIC_ANALYTICS_PROVIDER=plausible  # 'plausible' (default) or 'ga4'
PUBLIC_ANALYTICS_ID=on               # GA4: the measurement ID (G-…). Plausible: any value turns it on
# Plausible's domain comes from `site` in astro.config.mjs (fsic.space at launch)
```

## Testing Analytics

### Local Testing
Analytics won't load in development mode (`npm run dev`). To test:

```bash
# Build production version
npm run build

# Serve built site
npm run preview

# Visit in browser and check Network tab for analytics requests
```

### Verify Installation

**Google Analytics 4:**
1. Visit your site
2. Open GA4 dashboard → Real-Time reports
3. Verify your visit appears

**Plausible:**
1. Visit your site
2. Open Plausible dashboard
3. Verify your visit appears in real-time

## Privacy Compliance Checklist

- [x] Privacy Policy page created and accessible
- [x] Privacy Policy link in footer
- [x] Do Not Track and Global Privacy Control respected (GA4)
- [ ] Cookie consent banner (if using GA4 with cookies)
- [ ] Update Privacy Policy with specific analytics provider details
- [ ] Configure data retention settings in analytics platform
- [ ] Review and accept data processing terms

## Cookie Consent (GA4 Only)

If using Google Analytics 4, you may want to add a cookie consent banner. Options:

1. **Simple Banner**: Custom implementation (lightweight)
2. **Third-Party Solutions**: 
   - Cookiebot
   - OneTrust
   - Termly

The Privacy Policy already discloses cookie usage. A banner is required under GDPR if:
- You're tracking EU visitors
- You're using cookies (GA4 does, Plausible doesn't)

## Next Steps

1. **Choose Provider**: Decide between GA4 (comprehensive) or Plausible (privacy-friendly)
2. **Set Up Account**: Create account with chosen provider
3. **Configure Variables**: Add environment variables to GitHub repository
4. **Deploy**: Push to main and let GitHub Actions deploy
5. **Verify**: Check that tracking is working
6. **Update Privacy Policy**: Add provider-specific details if needed
7. **Submit to Search Console**: Link GA4 to Google Search Console for better SEO insights

## Removal Instructions

To remove analytics:

1. Delete or don't set the `PUBLIC_ANALYTICS_ID` environment variable
2. Analytics component will remain in code but won't load any scripts
3. Privacy Policy can remain (still accurate, just states no tracking is active)

## Performance Impact

- **GA4**: ~45KB (gzipped), loads asynchronously
- **Plausible**: <1KB, loads asynchronously
- **No Analytics**: 0KB, no external requests

Both implementations use `async` or `defer` to avoid blocking page render.

## Support & Resources

### Google Analytics 4
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Privacy & Data Management](https://support.google.com/analytics/topic/2919631)

### Plausible Analytics
- [Getting Started](https://plausible.io/docs)
- [Privacy Documentation](https://plausible.io/privacy-focused-web-analytics)

## Questions?

Contact the development team or consult the Privacy Policy page for user-facing information about data collection.

## Corrections (November 10, 2026)

A review of the first version found:
- **Do Not Track wasn't respected.** This document and the component's comment said it was, but nothing checked it. GA4 now isn't loaded when Do Not Track or Global Privacy Control is on.
- **Plausible had no domain.** It needs the site's domain to record anything. It now comes from `site`.
- **DNS hints for Google Tag Manager and Plausible were on every page** even with analytics off. They now appear only when analytics is on.
- **The Privacy Policy described analytics and cookies the site doesn't use.** It's rewritten as a draft that matches the site, unlinked until approved.
