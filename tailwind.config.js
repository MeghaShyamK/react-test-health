/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'eth': "url('./assests/eth.jpg')",
        'eth2': "url('./assests/eth2.jpg')",
      }
    },
  },
  plugins: [],
}