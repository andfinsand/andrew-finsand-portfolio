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
      },
      backgroundImage: {
        'bgImage': "url('/blackWaves.jpg')",
      },
    }
  },
  plugins: [require('daisyui')],
}