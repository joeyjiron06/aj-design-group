const plugin = require('tailwindcss/plugin');

const customPlugin = plugin(({ addVariant, addBase }) => {
  addBase({
    [':where([class*="aos:"]:not([data-aos-init="1"]))']: {
      visibility: 'hidden'
    }
  })

  addVariant('aos', '&');
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      "light",
      {
        custom: {
          ...require("daisyui/src/colors/themes")["[data-theme=black]"],
          "color-scheme": "dark",
          "primary": "#FFB612",
          "neutral": "#110E0E",
          "--rounded-btn": "0.25rem",
          "--rounded-box": "0.5rem",
          "base-100": "#000",
          "base-200": "#0A0A0A",
          "base-300": "#101010",
          "base-content": "#fff",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require('tailwindcss-hero-patterns'),
    customPlugin,
  ],
};
