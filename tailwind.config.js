/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      green: "#4CAF4F",
      "dark-grey": "#4D4D4D",
      silver: "#F5F7FA",
      white: "#FFFFFF",
      grey: "#717171",
      black: "#263238",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1240px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
