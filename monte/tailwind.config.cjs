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
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
