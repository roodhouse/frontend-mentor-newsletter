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
      Tomato: 'hsl(4, 100%, 67%)',
      DarkSlateGray: "hsl(234, 29%, 20%)",
      CharcoalGray: "hsl(235, 18%, 26%)",
      Gray: "hsl(231, 7%, 60%)"
    },
    fontFamily: {
      Roboto: 'Roboto'
    }
  },
  plugins: [],
}