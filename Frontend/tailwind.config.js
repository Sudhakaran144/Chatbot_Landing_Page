/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderColor : {
        navbarBorderColor :"#BAB9B9",
      },
      colors : {
        navitemColor : "#48736A",
        color : "#264729"
      },
      backgroundColor:{
        mainColor : "#E8F5E9", 
        customColor : "#264729"
      },
      width : {
        "2px" : "2px"
      },
      height : {
        "customHeight" : "488px",
        "customTimelineHeight" : "1090px"
      },
      backgroundImage: {
        customLinear: 'linear-gradient(to right, #C8C2C2 100%, #666666 20%)',
      },
      dropShadow: {
        'soft-gray': '0 4px 6px rgba(176, 190, 197, 0.5)',  
        'muted-green': '0 4px 6px rgba(129, 199, 132, 0.5)',
      }, 
    },
  },
  plugins: [],
}
