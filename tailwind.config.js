/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      pink: '#FF1FE9',
      purple: '#2D2C5A',
      skyblue: '#CAD6FF',
    },
    extend: {
      fontFamily: {
        'electrolize': ['Electrolize', 'sans-serif'],
        'bakbakone': ['Bakbak One', 'sans-serif'],
        'play': ['Play', 'sans-serif'],
        'spacegrotesk': ['Space Grotesk', 'sans-serif'],
      },
    }
  },
  plugins: [require('daisyui')],
}
