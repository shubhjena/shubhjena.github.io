/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F3F3F3',
      'black': '#2D3032',
      'primary': '#F4EEFF',
      'secondary': '#DCD6F7',
      'tertiary': '#A6B1E1',
      'accent': '#424874',
    },
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
