/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        readax_pro: "Readex Pro",
      },
      backgroundColor: {
        primary: "#07689F",
        on_hover: "#085a88",
      },
      colors: {
        primary: "#07689F",
        light_black: "#444",
      },
      screens: {
        // You may want to adjust these breakpoints as needed
        mobile: "375px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
    listStyleType: {
      circle: "circle",
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
