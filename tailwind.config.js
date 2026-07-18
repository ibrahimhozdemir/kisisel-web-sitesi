/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4731D3",
        "primary-light": "#CBF281",
        accent: "#FFE86E",
        "dark-bg": "#252128",
        "dark-section": "#171043",
      },
    },
  },
  plugins: [],
};