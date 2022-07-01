/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  important: true,
  content: ["./*.html", "./**/*.html"],
  varients: {
    margin: ['responsive', 'hover']
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
