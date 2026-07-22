/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4731D3",
        lime: "#CBF281",
        accent: "#FFE86E",
        toggle: "#8F88FF",
        "dark-navy": "#120B39",
        muted: "#777777",
        "text-body": "#383838",
        "footer-bg": "#F9F9F9",
        "card-border": "#D2D2D2",
        "light-gray": "#D9D9D9",
        "lang-highlight": "#CAF181",
        "dark-bg": "#252128",
        "dark-section": "#171043",
        "dark-hero-green": "#211F0B",
        "dark-projects-bg": "#1A210B",
        "dark-card": "#2B2727",
        "dark-card-title": "#C1BAED",
        "dark-tag": "#8173DA",
        "dark-toggle-track": "#3A3A3A",
        "dark-lang-highlight": "#BAB2E7",
      },
    },
  },
  plugins: [],
};