// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages preview. When fsic.space points here (docs/06-launch-plan.md, "Switching to fsic.space"),
  // set site to 'https://fsic.space' and remove base: links go through url() (src/lib/url.ts), so
  // nothing else changes.
  site: 'https://barrelpixel.github.io',
  base: '/fsic',
  // Astro 7 defaults to JSX-style whitespace, which drops the spaces between inline elements on separate
  // lines (a link and the word after it). Keep HTML whitespace rules.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
});
