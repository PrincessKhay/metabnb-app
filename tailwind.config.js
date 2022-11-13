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
        collection: "#d7d7d7",
        collection_bg: "linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%)",
        tinytext: "#434343",
        footercolor: "#1d1d1e",
      }
    },
  },
  plugins: [],
}
