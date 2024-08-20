/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      DMsans: ["DM Sans", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
