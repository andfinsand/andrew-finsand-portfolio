/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      blue: '#BED3EF',
      lightblue: '#E4F2FF',
      navblue: '#000B1A',
      projectblue: "#9BB1FF",
      light: '#707080',
      dark: '#1C1D25',
      seagreen: '#02FFB3',
    },
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'lato' : ['Lato', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
      },
      dropShadow: {
        'custom': '0px 3px 3px rgba(0, 0, 0, .25)',
        'customLight': '0px 4px 3px rgba(0, 0, 0, .55)',
        'customDark': '4px 4px 4px rgba(0, 0, 0, .5)',
        'customBanner': '0px 5px 2px rgba(0, 0, 0, .55)',
      },
      boxShadow: {
        'custom': '0 5px 20px -17px rgba(2, 255, 179)',
      },
      skew: {
        '20': '20deg',
      }
    }
  },
  plugins: [require('daisyui')],
}