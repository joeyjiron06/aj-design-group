/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        'page': '72rem',
      },
      colors: {
        jade: {
          DEFAULT: '#00a878'
        },
        azule: {
          DEFAULT: '#016FB9',
        },
        olive: {
          DEFAULT: '#2E382E'
        },
        tomato: {
          DEFAULT: '#FF6F59'
        }
      }
    },
  },
  daisyui: {
    themes: [
      {
        custom: {
          // https://coolors.co/ffb612-00a878-016fb9-2e382e-ff6f59

          ...require("daisyui/src/theming/themes")["sunset"],
          "color-scheme": "dark",
          "primary": "#FFB612",
          "neutral": "#110E0E",
          "accent": "#00A878",

          "--rounded-btn": "999999px",
          "--rounded-box": "0.5rem",
          "base-100": "#000",
          "base-200": "#0A0A0A",
          "base-300": "#101010",
          "base-content": "#fff",
        },
      },
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwindcss-hero-patterns'),
  ],
}
