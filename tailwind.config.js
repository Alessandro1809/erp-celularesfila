/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },

      colors: {
        'custom-blue': '#82F7FF',
        'custom-green': '#38FF88',
        'custom-green-text': '#2BFF7F',

        'gradient-start': '#97FFE0',
        'gradient-end': '#01D1FF',

      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(to right, #D9F1FF, #30E6FF)',
      },


    },
  },
  plugins: [animations],
}

