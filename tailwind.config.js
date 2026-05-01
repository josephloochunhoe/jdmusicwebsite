/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jd-burgundy': '#6D001A',
        'jd-black': '#000000',
        'jd-white': '#FFFFFF',
        'jd-bg-dark': '#110004',
        'jd-bg-light': '#240008',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
