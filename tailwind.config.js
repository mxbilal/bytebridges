/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#07689F",
        on_hover: "#085a88",
      },
      colors: {
        primary: "#07689F",
      },
      screens: {
        // You may want to adjust these breakpoints as needed
        mobile: "375px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
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
