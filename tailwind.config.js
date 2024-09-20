/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      customDefaultBlack: 'var(--custom-default-black)',
      customDefaultWhite: 'var(--custom-default-white)',

      //Primary Colors
      customCream: 'var(--custom-cream)',
      customGreen: 'var(--custom-green)',
      customRed: 'var(--custom-red)',
      customOrange: 'var(--custom-orange)',

      //Secodary Colors
      customLightGreen: 'var(--custom-light-green)',
      customWaterGreen: 'var(--custom-water-green)',

    },
    extend: {
      fontFamily: {
        'homemade': ['"Homemade Apple"', 'cursive'],
        'sedan': ['"Sedan"', 'serif',]
      },
    },
  },
  plugins: [],
}

