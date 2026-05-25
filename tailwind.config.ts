/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            yellow: '#F5A623',
            orange: '#FF9500',
            blue: '#0068B7',
            dark: '#2D2D2D',
            light: '#FFF8F0',
            cream: '#FFF5E6',
          }
        },
        fontFamily: {
          sans: ['"Noto Sans JP"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }