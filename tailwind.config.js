/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode via a class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        superLightColor: '#bee9ee',
        lightColor: '#7cd9e4',
        mainColor: '#02badb',
        darkColor: '#0096b0',
        superDarkColor: '#006e81'
      }
    },
  },
  plugins: [],
}
