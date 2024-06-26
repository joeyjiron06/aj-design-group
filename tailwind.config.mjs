const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

const animateOnScroll = plugin(({ addVariant, addBase }) => {
  addBase({
    [':where([class*="aos:"]:not([data-aos-init="1"]))']: {
      visibility: 'hidden'
    }
  })

  addVariant('aos', '&');
});


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: 'inherit'

            // ...
          },
        },
      }),

      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans,]
      },
      maxWidth: {
        'page': '72rem',
      },

      // https://coolors.co/ffb612-00a878-016fb9-2e382e-ff6f59

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
          // https://coolors.co/ffb612-00a878-f1fffa-222222
          ...require("daisyui/src/theming/themes")["sunset"],
          "color-scheme": "dark",
          "primary": "#FFB612",
          "neutral": "#110E0E",
          "accent": "#00A878",

          "--rounded-btn": "999999px",
          "--rounded-box": "0.5rem",
          "base-100": "#040606",
          "base-200": "#060909",
          "base-300": "#0A0F0F",
          "base-content": "#F1FFFA"
        },
      },
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwindcss-hero-patterns'),
    animateOnScroll
  ],
}
