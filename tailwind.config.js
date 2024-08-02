/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, css}'],
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        primary: '#dd7732',
        secondary: '#2F2F37',
        gray: {
          900: '#202225',
          800: '#2F3136',
          700: '#36393F',
          600: '#4F545C',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
        }
      }
    },
  },
  plugins: [],
}
