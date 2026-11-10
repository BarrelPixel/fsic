// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// The site's base path: '/fsic' on the GitHub Pages preview, '' at fsic.space (docs/06-launch-plan.md).
const BASE = '/fsic';
// Redirect destinations don't get the base path from Astro, so add it here.
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
  // page as canonical. Not listed: Wix wildcard pages (/post/*, /service-page/*, /event-details/*,
  // /challenge-page/*; slugs unknown) and the template legal pages (/blank…), which have no counterpart yet:
  // those land on the 404 page, which links to every section.
  redirects: {
    '/about-4': to('/strategic-moment'),
    '/1-why-we-are-building-the-fsic': to('/strategic-moment'),
    '/copy-of-news-media': to('/faq'),
    '/about-7': to('/news'),
    '/blog': to('/news'),
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
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
