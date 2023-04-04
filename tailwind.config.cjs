/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      "light",
      {
        custom: {
          ...require("daisyui/src/colors/themes")["[data-theme=forest]"],
          "--rounded-btn": "0.25rem",
          "--rounded-box": "0.5rem",
          
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
