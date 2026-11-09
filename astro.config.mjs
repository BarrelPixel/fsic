// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://barrelpixel.github.io',
  base: '/fsic',
  // Astro 7 defaults to JSX-style whitespace, which drops the spaces between inline elements on separate
  // lines (a link and the word after it). Keep HTML whitespace rules.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
});
