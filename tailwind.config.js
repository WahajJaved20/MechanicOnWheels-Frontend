/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        breulGroteskBold: ['breulGroteskBBold', 'Times New Roman'],
        qanelasRegular: ['qanelasRegular', 'Times New Roman'] 
      }
    },
  },
  plugins: [],
}