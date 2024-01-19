export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
          // devices-lists
          "desktop-base": { max: "1920px" },
          "desktop-mini": { max: "1280px" },
          "mobile": { max: "768px" },
        },
        colors: {
          "lightbrown": "#9D5D43",
          "blackgray": "#191617",
          "whitehidden": "#F7F9F8",
        },
        fonts:{
          montserrat: ["Montserrat"],
        }
      },
    },
    plugins: [],
  };