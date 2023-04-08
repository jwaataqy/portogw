/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        "quicksand": ["Quicksand",'sans-serif'],
        "Roboto Mono":["Roboto Mono",'sans-serif']
      },
      backgroundImage:{
        'fotobackground':"url('/img/Vector 1.png')"
      },
    },
  },
  plugins: [],
}
