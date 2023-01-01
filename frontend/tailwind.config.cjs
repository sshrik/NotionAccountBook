/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#53B860',
      'primary-hover': '#4FA55A',
    },
  },
  plugins: [],
};
