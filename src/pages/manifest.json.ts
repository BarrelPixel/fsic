// The web app manifest, generated so its paths carry the base path (/fsic on the preview, none at
// fsic.space), as url() does for pages. It was a static file with /fsic/ written in, which breaks at launch.
import type { APIRoute } from 'astro';
import { url } from '../lib/url';
import { WHAT_IS_FSIC } from '../lib/seo';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        name: 'Florida Space Innovation Center',
        short_name: 'FSIC',
        description: WHAT_IS_FSIC,
        start_url: url('/'),
        display: 'standalone',
        background_color: '#FFFFFF',
        theme_color: '#0D2138',
        icons: [{ src: url('/favicon.svg'), sizes: 'any', type: 'image/svg+xml' }],
        lang: 'en-US',
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );
