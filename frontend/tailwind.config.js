/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'dark-teal': '#022B3A',
        'light-teal': '#1F7A8C',
        'baby-blue': '#BFDBF7',
        'smooth-gray': '#E1E5F2',
      },
    },
  },
  plugins: [require("daisyui")],
}

