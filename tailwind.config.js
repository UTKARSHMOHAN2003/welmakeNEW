/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["'Baloo 2'", "sans-serif"], 
      },colors: {
        Byellow: '#FFFF8F', 
      },
    },
  },
  plugins: [],
};
