/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#2ab2af',
        primaryLight: '#43d3d0',
        secondary: '	#c0df34',
        light: '#e5eff5',
        gray: '#98a6bd',
      },
      fontFamily: {
        sans: ['"Karla"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
