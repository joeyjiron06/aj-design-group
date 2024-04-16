import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://joeyjiron06.github.io',
  base: '/aj-design-group',
  integrations: [tailwind({ nesting: true })]
});