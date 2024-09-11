/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  
  theme: {
    extend: {
      colors: {
        primary: "#0f1322",
        color1: "#92d4e0",
        color2: "#dabda9",
        color3: "#1e212c",
        color4: "#b8bfff",
      }
    },
  },
  plugins: [],
}

