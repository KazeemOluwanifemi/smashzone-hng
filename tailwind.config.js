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
        Playfair: ['PlayfairDisplay', 'serif'],
        Exo: [
          'Exo2',
          'sans-serif',
          {
            url: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap',
          },
        ]
        // Exo: ['Exo2-Regular', 'sans-serif']
      },
      width:{
        'header-width': '1440px',
        'button-width': '241px',
        'icon-width': '14px',
        'logo-width': '60px',
        'nav-width' : '472px',
        'nav-list-width': '18px',
        'products-width': '280px'
      },
      height:{
        'icon-height': '14px',
        'logo-height': '60px',
        'header-height': '92px',
        'nav-height': '24px',
        'footer-height': '264px',
        'products-height': '240px',
        'products-listing-h': '184px'
      },
      gap:{
        'navbar-gap': '652px',
        'footer-gap1': '42px',
        'products-gap': '10px'
      }
    },
  },
  plugins: [],
}