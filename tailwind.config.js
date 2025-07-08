/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './contact.html', // semua HTML dalam folder pages/
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}

