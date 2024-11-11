/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primaryRegular: ["plus-jakarta-sans-regular"],
      primaryMedium: ["plus-jakarta-sans-medium"],
      primaryBold: ["plus-jakarta-sans-bold"],
    },
  },
  plugins: [],
};
