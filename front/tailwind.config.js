/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-arabic': ["Montserrat Arabic"],
      },
      colors: {
        "pdark-black": "#090909",
        "pmid-black": "#141414",
        "pmid-gray": "#737373",
        "pdark-purple": "#6f3699",
        "pmid-purple": "#9e49db"
      },
    },
  },
  plugins: [],
}
