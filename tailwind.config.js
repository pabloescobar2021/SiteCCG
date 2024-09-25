/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
        extend: {
          fontFamily: {
              sans: ['Roboto', 'sans-serif'],
              serif: ['Georgia', 'serif'],
              mono: ['Courier New', 'monospace'],
          },
      spacing: {
        '30': '7.5rem', // Пример добавления нового значения для отступов
      },
    },
  },
  variants: {},
  plugins: [],
}