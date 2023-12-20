/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '25': '25ms',
        '50': '50ms',
      }
    },
  },
  plugins: [],
}

