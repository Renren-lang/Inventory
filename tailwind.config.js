/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./custom directory/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily:{
        Roboto_Black:["Robotic-Black","san-serif"],
        Roboto_BlackItalic:["Roboto_BlackItalic","san-serif"],
      }
    },
  },
  plugins: [],
}

