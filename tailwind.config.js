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

      primary: "#F3F1F5",
      secondary: "#F0D9FF",
      tertiary: "#BEADFA",
      accent: "#121212",

      // primary: "#FCFFE7",
      // secondary: "#DFCCFB",
      // tertiary: "#D0BFFF",
      // accent: "#3D246C",

      // primary: "#F4EEFF",
      // secondary: "#DCD6F7",
      // tertiary: "#A6B1E1",
      // accent: "#424874",
      blue:"#0000ff",
      red:"#00FF00",
    },
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
