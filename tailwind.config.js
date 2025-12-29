/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E53935',
        'deep-crimson': '#B71C1C',
        'soft-white': '#FAFAFA',
        'pure-black': '#000000',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '.25em',
      },
    },
  },
  plugins: [],
}
