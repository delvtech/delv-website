/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blanka: ["f37blanka"],
        incise: ["f37incise"],
      },
      backgroundImage: {
        texture: "url('/public/texture.png')",
      },
    },
  },
  plugins: [],
};
