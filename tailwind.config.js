/** @type {import('tailwindcss').Config} */
// Most styling lives in src/styles/site.css; these tokens mirror its :root values.
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jd-burgundy': '#6D001A',
        'jd-wine-deep': '#2E0009',
        'jd-amber': '#FFB938',
        'jd-paper': '#FFF7F2',
        'jd-blush': '#F8E3E7',
        'jd-ink': '#24070F',
        'jd-black': '#000000',
        'jd-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Big Shoulders Display"', '"Arial Narrow"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
