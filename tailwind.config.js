/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient": `linear-gradient(to right, ${theme(
          "colors.blue"
        )}, ${theme("colors.red")})`,
      }),
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#F3F3F3",
      black: "#2D3032",
      primary: "#F4EEFF",
      secondary: "#DCD6F7",
      tertiary: "#A6B1E1",
      accent: "#424874",
      blue:"#0000ff",
      red:"#FF0000",
    },
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
