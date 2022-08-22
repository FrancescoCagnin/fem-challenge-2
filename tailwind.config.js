/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "hsl(25, 97%, 53%)",
        "neutral-light-grey": "hsl(217, 12%, 63%)",
        "neutral-medium-grey": "hsl(216, 12%, 54%)",
        "neutral-dark-blue": "hsl(213, 19%, 18%)",
        "neutral-very-dark-blue": "hsl(216, 12%, 8%)"
      },

      screens: {
        "mob": "375px",
        "desk": "1440px" 
      },

      fontFamily: {
        "overpass": ["Overpass", "sans-serif"]
      },

      fontSize: {
        "default-p": "15px"
      }

    },
  },
  plugins: [],
}
