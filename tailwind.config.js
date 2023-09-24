/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': "325px",
        'lg': '1440px',
      },
      colors: {
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
        'custom-white': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'League-Spartan': ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}