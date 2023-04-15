/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#222831',
      'white': '#FFFFFF',
      'offwhite': '#f2f2f2',
      'gray': '#333333',
      'gray2': '#666666',
      'gray3': '#B8B8B8',
      'gray4': '#EBEBEB',
      'grey': '#393e46',
      'orange': '#f96d00',
      'orange-2': '#c24d2c',
      'orange-3': '#ff5722',

     

    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'Bakbak': ['Bakbak One', 'cursive'],
      'Urbanist': ['Urbanist', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
      
    },
    extend: {},
  },
  plugins: [],
}