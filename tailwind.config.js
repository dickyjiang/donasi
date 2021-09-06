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
      }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}}
