/** @type {import('tailwindcss').Config} */
export default {
  content:['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        Roboto: ['Roboto','sans-serif'],
        Roboto_bold: ['Roboto-bold','sans-serif'],
      }
    },
  },
  plugins: [    require('@tailwindcss/typography'),
],
  
}

