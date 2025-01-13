/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#ffe165",
      },
      borderWidth: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
