/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFAD7",
        'yellow': "#fbbf24",
        'black': "#222831",
        'white': "#fff",
        'grey': "#eee"
      }
    },
  },
  plugins: [],
}

