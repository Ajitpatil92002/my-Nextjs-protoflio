/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1024",
      xxl: "1440px",
    },
    extend: {
      colors: {
        "navy-blue": "#0a192f",
        "light-navy": "#112240",
        green: "#64ffda",
        "green-tint": "rgba(100,255,218,0.1)",
        "lightest-navy": "#233554",
       
      },
      textColor: {
        textlightWhite: "#ccd6f6;",
        textgreen: "#64ffda",
      },
      fontFamily: {
        Roboto: ["Roboto"],
      },
      gridTemplateColumns: {
        prj: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
}