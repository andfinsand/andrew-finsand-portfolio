/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      pink: '#FF1FE9',
      white: '#ffffff',
    },
    extend: {
      fontFamily: {
        'electrolize': ['Electrolize', 'sans-serif'],
        'bakbakone': ['Bakbak One', 'sans-serif'],
        'play': ['Play}', 'sans-serif'],
      },
    }
  },
  plugins: [require('daisyui')],
}
