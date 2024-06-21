/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        "2xl": "1280px",
      },
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#f26c4f",
        background: "rgb(0, 32, 60)",
      },
    },
  },
  plugins: [],
};
