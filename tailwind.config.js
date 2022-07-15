/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ["Argentum sans", "sans-serif"],
    },
    
    extend: {
      colors: {
        "primary-1": "#010923",
        "primary-2": "#072692",
        "primary-3": "#6888F8",
        "text-3": "#888C99",
        "text-4": "#DBDCDF"
      }
    },
  },
  plugins: [],
}
