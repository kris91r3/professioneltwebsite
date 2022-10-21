/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      offwhite: "#eeeeee",
      black: "#000000",
      grey: "#3e3e3e",
      lightgrey: "#5b5b5b",
      Lime: "#ccff00",
      Limehover: "#96bb00",
      Darkgrey: "#4b4b4b",

      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        50: "50%",
        16: "4rem",
      },
    },
    extend: {
      screens: {
        sm: "480px",
        // => @media (min-width: 480px) { ... }

        md: "710px",
        // => @media (min-width: 710px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
