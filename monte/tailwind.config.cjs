/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'gold':'#f1d302'
      },
      fontFamily: {
        'sans': ['Mona Sans'],
        'serif': ['Goldenbook']
      },
      fontSize: {
        'header' : '3xl'
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
