/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      display: ['group-hover'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    },
  },
  plugins: [],
};
