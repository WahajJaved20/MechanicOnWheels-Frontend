/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        breulGroteskBold: ['breulGroteskBBold', 'Times New Roman'],
        qanelasRegular: ['qanelasRegular', 'Times New Roman'] 
      },
      colors:{
        lightModeBackground: "#FFF",
        darkModeBackground: "#000000",
        lightModeSidebarBackground: "#000000",
        darkModeSidebarBackground: "#FFF",
        primaryGreen: "#9fe96e",
        primaryOrange: "#ff844b"
      }
    },
  },
  plugins: [],
}