/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        scrolling: '400%',
      },
      fontFamily: {
        bungee: ['"Bungee"', 'cursive'],
      },
    },
  },
  plugins: [],
};
