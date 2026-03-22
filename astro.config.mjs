// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site: 'https://taro0079.github.io',
  // base: '/isogo-astro-page',

  vite: {
    plugins: [tailwindcss()]
  }
});
