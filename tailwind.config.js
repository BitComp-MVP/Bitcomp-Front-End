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
      'text-title': '#333333',
      'text-body': '#666666',
      'text-field': '#B8B8B8',
      'text-disabled': '#EBEBEB',
      'grey': '#393e46',
      'orange': '#f96d00',
      'orange-2': '#c24d2c',
      'orange': '#ff5722',

     

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