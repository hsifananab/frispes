/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"'],
        lora: ['"Lora"'],
        'playfair-display': ['"Playfair Display"'],
      },
      colors: {
        'color-bg': '#E5E5E5',
        'color-primary': '#10375C',
        'color-black': '#222831',
        'color-gray': '#6A6A6A',
        'color-gray-1': '#9A9A9A',
        'color-gray-3': '#DFDFDF',
        'color-secondary': '#FF5722',
        'color-secondary-120': '#DD2C00',
      },
    },
  },
  plugins: [],
};
