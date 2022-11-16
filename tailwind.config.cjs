/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      offwhite: "#eeeeee",
      black: "#000000",
      grey: "#2e2e2e",
      lightgrey: "#505050",
      Lime: "#ccff00",
      Limehover: "#96bb00",
      blaa: "#1767ee",
      laks: "#fcafaa",

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
      dropShadow: {
        "3xl": "0 2px 2px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
