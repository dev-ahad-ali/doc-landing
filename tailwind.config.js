/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#020043',
        'secondary': '#FFFFF5',
        'accent': '#FFC637',
      },
      fontFamily: {
        'inter': '"Inter", sans-serif',
      },
    },
  },
  plugins: [require('daisyui')],
};
