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
      colors: {
        lightModeBackground: "#102a43",
        darkModeBackground: "#829ab1",
        lightModeSidebarBackground: "#102a43",
        darkModeSidebarBackground: "#102a43",
        primaryGreen: "#9fe96e",
        primaryOrange: "#ff844b",
        primaryBlue: "#00c4ff"
      }
    },
  },
  plugins: [],
}