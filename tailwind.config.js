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
      turkis: {
        light : '#74D5E7',
        DEFAULT : '#4BABBD',
        dark : '#399CAE',
      },

      },
      },
  variants: {
    extend: {
    zIndex: {
         '-10': '-10',
    },
    margin: {
        '-72': '-18rem',
              }
  },
  plugins: [require('@tailwindcss/forms')],
}}
}
