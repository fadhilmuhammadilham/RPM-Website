/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './contact.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [require('daisyui')],
}
