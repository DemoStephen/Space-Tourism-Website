/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "home-desktop": "url('./src/assets/home/background-home-desktop.jpg')",
      "home-tablet": "url('./src/assets/home/background-home-tablet.jpg')",
      "home-mobile": "url('./src/assets/home/background-home-mobile.jpg')",

      "crew-desktop": "url('./src/assets/crew/background-crew-desktop.jpg')",
      "crew-tablet": "url('./src/assets/crew/background-crew-tablet.jpg')",
      "crew-mobile": "url('./src/assets/crew/background-crew-mobile.jpg')",

      "destination-desktop":
        "url('./src/assets/destination/background-destination-desktop.jpg')",
      "destination-tablet":
        "url('./src/assets/destination/background-destination-tablet.jpg')",
      "destination-mobile":
        "url('./src/assets/destination/background-destination-mobile.jpg')",
    },
    fontFamily: {
      sans: ['"Bellefair", serif'],
    },
  },
  plugins: [],
};
