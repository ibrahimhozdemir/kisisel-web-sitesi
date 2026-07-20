/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4731D3",
        lime: "#CBF281",
        accent: "#FFE86E",
        toggle: "#8F88FF",
        "dark-bg": "#252128",
        "dark-section": "#171043",
      },
    },
  },
  plugins: [],
};