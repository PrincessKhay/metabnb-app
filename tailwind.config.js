/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a02279",
        bordercolor: "#a3a3a3",
        input: "rgba(247, 247, 247, 0.1)",
        placeholdertext: "#b8b8b8",
        token: "#f7f7f7",
      }
    },
  },
  plugins: [],
}
