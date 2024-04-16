import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://icy-mud-0918e9b1e.5.azurestaticapps.net',
  integrations: [tailwind({ nesting: true })]
});