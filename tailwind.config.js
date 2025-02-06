/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      mainbackground: '#0f0e17',
      maintext: '#fffffe',
      altcolor: '#ff8906',
      secondry: '#f25f4c',
      tertry: '#e53170'
    },
  },
  plugins: [require("daisyui")],
}

