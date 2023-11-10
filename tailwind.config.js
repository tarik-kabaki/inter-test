/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xsmall: "200px",
      // => @media (min-width: 360px) { ... }

      mobile: "500px",

      mid: "1245px",
      // => @media (min-width: 1024px) { ... }

      top: "2040px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
