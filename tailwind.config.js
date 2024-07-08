/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FBC02D',
        'brand-yellow-darker': '#966C03',
        'brand-yellow-dark': '#C89004',
        'brand-yellow-light': '#FCD269',
        'brand-yellow-lighter': '#FDE19B',
        'brand-yellow-plain': '#FEF0CD',
        'dark-three': '#212121',
        'dark-two': '#3B3B3B',
        'dark-one': '#6E6E6E',
        'light-grey': '#A1A1A1',
        'lighter-grey': '#D4D4D4',
        'shaded-white': '#EDEDED',
        'white': '#FFFFFF'
      },
      fontFamily: {
        Playfair: "'PlayfairDisplay', 'serif'",
        Exo: "'Exo2', 'sans-serif'"
      },
      width:{
        'button-width': '241px'
      }
    },
  },
  plugins: [],
}