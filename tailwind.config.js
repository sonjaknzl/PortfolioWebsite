/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MSLight: ["MS-Light", "sans-serif"],
        MSRegular: ["MS-Regular", "sans-serif"],
        MSMedium: ["MS-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
