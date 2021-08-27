module.exports = {
  purge: [],
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
