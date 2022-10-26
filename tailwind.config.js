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
      light: '#707080',
      medium: '#282A35',
      darkdark: '#202020',
      dark: '#1C1D25',
      slate: '#94b8a3',
      pink: '#FF1FE9',
      purple: '#2D2C5A',
      skyblue: '#CAD6FF',
      seagreen: '#02FFB3',
      seablue: '#2C3E5A',
      orange: '#be5504',
    },
    extend: {
      fontFamily: {
        'electrolize': ['Electrolize', 'sans-serif'],
        'bakbakone': ['Bakbak One', 'sans-serif'],
        'play': ['Play', 'sans-serif'],
        'spacegrotesk': ['Space Grotesk', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
      },
      dropShadow: {
        'custom': '0px 3px 3px rgba(0, 0, 0, .25)',
        'customLight': '0px 4px 3px rgba(0, 0, 0, .55)',
        'customDark': '3px 5px 2px rgba(0, 0, 0, .55)',
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