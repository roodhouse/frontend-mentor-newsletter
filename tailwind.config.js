/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      tomato: 'hsl(4, 100%, 67%)',
      darkSlateGray: "hsl(234, 29%, 20%)",
      charcoalGray: "hsl(235, 18%, 26%)",
      gray: "hsl(231, 7%, 60%)"
    },
    fontFamily: {
      Roboto: 'Roboto'
    }
  },
  plugins: [],
}