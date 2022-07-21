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
      sans: [
        'ArgentumSans', '-apple-system', 'BlinkMacSystemFont',
        'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'
      ],
    },
    
    extend: {
      colors: {
        "primary-1": "#010923",
        "primary-2": "#072692",
        "primary-3": "#6888F8",
        "text-1": "#16192C",
        "text-2": "#1F2436",
        "text-3": "#888C99",
        "text-4": "#DBDCDF",
        "text-4-pro": "#A6B7D4"
      }
    },
  },
  plugins: [],
}
