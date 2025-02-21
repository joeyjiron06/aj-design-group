const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColors = require('tailwindcss/colors')

const neutral = {
  DEFAULT: '#a5acaf',
  50: '#f9fafa',
  100: '#f3f4f4',
  200: '#e6e7e8',
  300: '#d1d5d6',
  400: '#a5acaf',
  500: '#959ca0',
  600: '#777e82',
  700: '#61676a',
  800: '#505658',
  900: '#45484a',
  950: '#27292b'
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        sans: ['General Sans', ...defaultTheme.fontFamily.sans],
        body: ['General Sans', ...defaultTheme.fontFamily.sans],
        headings: ['Amulya', ...defaultTheme.fontFamily.sans]
      },
      // https://coolors.co/ffb612-101820-003087-c60c30-a5acaf
      // https://www.tints.dev/base/070A0E
      colors: {
        base: {
          DEFAULT: defaultColors.zinc['950'],
          50: defaultColors.zinc['950'],
          100: defaultColors.zinc['900'],
          200: defaultColors.zinc['800'],
          300: defaultColors.zinc['700'],
          400: defaultColors.zinc['600'],
          500: defaultColors.zinc['500'],
          600: defaultColors.zinc['400'],
          700: defaultColors.zinc['300'],
          800: defaultColors.zinc['200'],
          900: defaultColors.zinc['100'],
          950: defaultColors.zinc['50'],
          foreground: neutral['50'],
          'foreground-dim': neutral['300'],
          'foreground-dimmer': neutral['600']
        },

        primary: {
          DEFAULT: '#ffb612',
          50: '#fffaeb',
          100: '#fff2c6',
          200: '#ffe488',
          300: '#ffd04a',
          400: '#ffb612',
          500: '#f99807',
          600: '#dd7102',
          700: '#b74e06',
          800: '#943b0c',
          900: '#7a310d',
          950: '#461802',
          foreground: neutral['950']
        },

        secondary: {
          DEFAULT: '#c60c30',
          50: '#fff1f1',
          100: '#ffe3e4',
          200: '#ffcbcf',
          300: '#ffa1a8',
          400: '#ff6c7b',
          500: '#fa3950',
          600: '#e81639',
          700: '#c60c30',
          800: '#a40d2f',
          900: '#8c0f2f',
          950: '#4f0214',
          foreground: neutral['50']
        },

        accent: {
          DEFAULT: '#003087',
          50: '#e9f8ff',
          100: '#ceeeff',
          200: '#a7e3ff',
          300: '#6bd6ff',
          400: '#26baff',
          500: '#0091ff',
          600: '#0067ff',
          700: '#004cff',
          800: '#0040e6',
          900: '#003db3',
          950: '#003087',
          foreground: neutral['50']
        },
        neutral
      }
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-hero-patterns')
  ]
}
