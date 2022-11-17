/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html","./src/**/*.{jsx,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
            librefranklin: ['libre franklin', 'serif'],
        },
        colors: {
            'gunmetal': '#27373F'
        }
      },
    },
    plugins: [],
  }