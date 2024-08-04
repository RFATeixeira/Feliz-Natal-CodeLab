/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-red-10": "#CD3C32",
        "brand-red-20": "#FFE9E8",
        "dark-color": "#121214",
      },
      backgroundImage: {
        snowFall: "url('../src/image/snowfall.gif')",
      },
    },
    fontFamily: {
      body: ["Archivo", "sans-serif"],
    },
  },
  plugins: [],
};
