// sitemap.xml (docs/13 B2): every page in the menus, the homepage, and each press release (lastmod: its date).
// Absolute URLs from `site` and the base path, so it is right on the preview and at fsic.space.
import type { APIRoute } from 'astro';
import { absolute, sitePages } from '../lib/seo';
import { getReleases, isoDate } from '../lib/news';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  // sitePages() already includes the homepage (the menus list it), so it isn't added separately.
  const pages = sitePages().map((p) => ({
    loc: absolute(p.path.endsWith('/') ? p.path : `${p.path}/`),
    priority: p.path === '/' ? '1.0' : '0.8',
    changefreq: p.path === '/' ? 'weekly' : 'monthly',
  }));
  const releases = (await getReleases()).map((r) => ({ 
    loc: absolute(`/news/${r.id}/`), 
    lastmod: isoDate(r.data.date),
    priority: '0.6',
    changefreq: 'never'
  }));
  const posts = (await getCollection('blog', (p) => p.data.status === 'published')).map((p) => ({ 
    loc: absolute(`/blog/${p.id}/`), 
    lastmod: isoDate(p.data.updated ?? p.data.date),
    priority: '0.7',
    changefreq: 'monthly'
  }));
  
  const urls = [...pages, ...releases, ...posts];
  const body = urls
    .map((u) => 
      `  <url>` +
      `<loc>${u.loc}</loc>` +
      ('lastmod' in u ? `<lastmod>${u.lastmod}</lastmod>` : '') +
      `<changefreq>${u.changefreq}</changefreq>` +
      `<priority>${u.priority}</priority>` +
      `</url>`
    )
    .join('\n');
    
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
