/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient": `linear-gradient(to right, ${theme(
          "colors.blue"
        )}, ${theme("colors.green")})`,
      }),
      colors: {
        primary: "#F3F1F5",
        secondary: "#F0D9FF",
        tertiary: "#BEADFA",
        accent: "#121212",
      },
    },
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
