/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1200px',    
      xl: '1440px',
    },
    extend: {
      colors: {
        myBlue: "#0A32B3",
        myPink: "#BD365D",
      },
    backgroundImage: (theme) => ({
      pattern:
      "url('https://www.shutterstock.com/image-vector/social-media-sketch-vector-seamless-600nw-1660950727.jpg')",
    }),
    },
  },
  plugins: [],
};

 