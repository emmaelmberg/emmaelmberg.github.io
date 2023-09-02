/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./taildwind.html"
  ],
  theme: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}