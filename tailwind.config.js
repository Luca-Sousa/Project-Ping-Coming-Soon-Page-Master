/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.css'],
  theme: {
    extend: {
      colors: {
        'col-B': 'hsl(223, 87%, 63%)',
        'col-PB': 'hsl(223, 100%, 88%)',
        'col-LR': 'hsl(354, 100%, 66%)',
        'col-G': 'hsl(0, 0%, 59%)',
        'col-VDB': 'hsl(209, 33%, 12%)',
        'hover-btn': 'rgba(113,149,245,255)',
        'hover-icon': 'rgba(75,121,248,255)'
      },
      fontFamily: {
        'LibreFranklin': 'Libre Franklin'
      }
    },
  },
  plugins: [],
}

