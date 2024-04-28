/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#DF6951",
        secondary:"#F1A501",
        lightBlue:"#181E4B",
        lightGray:"#5E6282",
        lightGrayAlt:" #686D77",
        lightGrayAlt2:"#84829A",
        white:"#fff",
        title:"#14183E",
        subtitle:"#1E1D4C",
        lightBlack:"#080809",
        lightPink:"#8A79DF",
        navText:"#212832"
      }
    },
    fontFamily:{
      poppins:["Poppins","sans-serif"],
      volkhov:["Volkhov","serif"]
    },
    borderRadius:{
      extraLarge: "8.0625rem"
    }
  },
  plugins: [],
}