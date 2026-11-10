// robots.txt (docs/13 B2–B3). At fsic.space: crawl everything, with the sitemap. On the preview: crawl nothing
// (src/lib/seo.ts INDEXABLE). Crawlers read robots.txt only at a host's root, so on the GitHub Pages preview
// (under /fsic) the pages' own noindex is what keeps them out; at fsic.space this file is at the root.
import type { APIRoute } from 'astro';
import { INDEXABLE, absolute } from '../lib/seo';

export const GET: APIRoute = () =>
  new Response(
    INDEXABLE
      ? `User-agent: *\nAllow: /\n\nSitemap: ${absolute('/sitemap.xml')}\n`
      : `# Preview of the Florida Space Innovation Center site. Not for indexing; the site will live at https://fsic.space.\nUser-agent: *\nDisallow: /\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
