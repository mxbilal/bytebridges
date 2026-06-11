/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundColor: {
        primary: "#07689F",
        primary_dark: "#085a88",
        on_hover: "#085a88",
        surface: "#f8fafc",
        light_gray: "#f1f5f9",
      },
      colors: {
        primary: "#07689F",
        primary_dark: "#085a88",
        accent: "#0ea5e9",
        surface: "#f8fafc",
        muted: "#64748b",
        light_black: "#444",
        light_gray: "#f1f5f9",
      },
      screens: {
        mobile: "375px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
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
