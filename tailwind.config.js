/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-header": "url('/src/assets/images/backgroundheader.jpg')",
        "background-edu": "url('/src/assets/images/bg-edu.jpg')",
      },
      fontFamily: {
        "family-quicksand": ["Quicksand", "sans-serif"],
        "family-satoshi": ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
