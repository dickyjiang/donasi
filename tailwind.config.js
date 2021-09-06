const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './public/index.html',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.{jsx,js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dmmono : "'DM Mono', monospace",
        dmserif : "DM Serif Display', serif",
      },

      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,

      'turkis': '#4BABBD',
      },
      },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}}
