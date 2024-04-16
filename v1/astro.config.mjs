import { defineConfig, AstroUserConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://joeyjiron06.github.io',
  base: process.env.BASE_URL || '/aj-design-group',
  integrations: [mdx(), sitemap(), tailwind({ nesting: true })],
});
