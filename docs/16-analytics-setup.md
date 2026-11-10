# Analytics Setup Guide

**Created:** November 10, 2026  
**Status:** Framework Ready - Configuration Required

## Overview

The FSIC website includes a flexible analytics framework that supports both Google Analytics 4 (GA4) and Plausible Analytics. The implementation is privacy-focused and respects user preferences.

## Privacy-First Approach

✅ **Privacy Policy Required**: The Privacy Policy page (`/privacy`) is live and linked in the footer  
✅ **Do Not Track Support**: Automatically respects browser DNT settings  
✅ **No Tracking Without Consent**: Analytics are disabled by default until configured  
✅ **GDPR/CCPA Ready**: Framework supports privacy compliance

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
3. **DNT Respect**: Script checks for Do Not Track and disables tracking if enabled
4. **Privacy Integration**: Privacy Policy page documents all tracking practices

### Code Example

```typescript
// Environment variables (set in GitHub Actions secrets or .env.production)
PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX  # GA4 Measurement ID or Plausible domain
PUBLIC_ANALYTICS_PROVIDER=ga4     # 'ga4' or 'plausible'
PUBLIC_PLAUSIBLE_DOMAIN=fsic.space # Optional: Plausible domain override
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
- [x] Do Not Track support implemented
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
