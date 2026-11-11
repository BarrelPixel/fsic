// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// The site's base path: '/fsic' on the GitHub Pages preview, '' at fsic.space (docs/06-launch-plan.md).
const BASE = '/fsic';
// Redirect destinations don't get the base path from Astro, so add it here.
/** @param {string} path */
const to = (path) => `${BASE}${path}`;


// https://astro.build/config
export default defineConfig({
  // GitHub Pages preview. When fsic.space points here (docs/06-launch-plan.md, "Switching to fsic.space"),
  // set site to 'https://fsic.space' and BASE (above) to '': links go through url() (src/lib/url.ts) and the
  // redirects through to(), so nothing else changes. That also switches on indexing (src/lib/seo.ts).
  site: 'https://barrelpixel.github.io',
  base: BASE || undefined,
  // Astro 7 defaults to JSX-style whitespace, which drops the spaces between inline elements on separate
  // lines (a link and the word after it). Keep HTML whitespace rules.
  compressHTML: true,
  // Old fsic.space (Wix) addresses → their new pages, so links and search rankings carry over at the domain
  // switch (docs/13 B4; inventory in docs/08 §1). Each builds a small page that forwards and names the new
  // page as canonical. The list is every address in the Wix sitemaps (checked November 11, 2026), except the
  // template legal pages (/blank, /blank-1…3), which have no counterpart yet, and Wix member profiles: those
  // land on the 404 page, which links to every section. /blog and /news keep their addresses.
  redirects: {
    '/about-4': to('/strategic-moment'),
    '/1-why-we-are-building-the-fsic': to('/strategic-moment'),
    '/copy-of-news-media': to('/faq'),
    '/about-7': to('/news'),
    '/event-list': to('/news'),
    '/talent': to('/model#talent'),
    '/innovation': to('/model#innovation'),
    '/market': to('/model#market'),
    '/civic': to('/model#civic'),
    '/john-joaquin': to('/governance'),
    '/leadership': to('/governance'),
    '/book-online': to('/programs-facilities'),
    '/challenges': to('/programs-facilities'),
    '/copy-of-home': to('/'),
    '/copy-of-home-1': to('/'),
    '/general-clean': to('/'),
    '/coming-soon-03': to('/'),
    // Wix blog posts, sample events, challenge pages and booking services (the Wix sitemaps, November 2026).
    '/post/accelerating-innovation-through-community-centered-programs': to('/blog'),
    '/post/building-talent-and-trust-at-florida-space-innovation-center': to('/blog'),
    '/post/transforming-new-smyrna-beach-into-a-space-innovation-hub': to('/blog'),
    '/event-details/space-technology-innovation-workshop': to('/news'),
    '/event-details/youth-stem-opportunities-symposium': to('/news'),
    '/event-details/stellar-arts-and-tech-festival': to('/news'),
    '/challenge-page/0bcae0b5-8ac6-474d-9de0-4ff7f1ccb9c0': to('/programs-facilities'),
    '/challenge-page/0c1cef60-ca6b-4e14-9a52-c9d58b766fee': to('/programs-facilities'),
    '/challenge-page/3388fc2c-4480-498f-b388-776402e4a3e7': to('/programs-facilities'),
    '/service-page/challenge-lab': to('/programs-facilities'),
    '/service-page/micro-credential-academy': to('/programs-facilities'),
    '/service-page/stem-outreach-event': to('/programs-facilities'),
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
