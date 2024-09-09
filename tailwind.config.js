import { MdHeight } from 'react-icons/md';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: { 
      keyframes: {
        moveline: {
          '0%': { height : '0%' },
          '100%': { height : '100%' },
        }
      },
      fontFamily: {
        'custom': ['Moderustic', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

