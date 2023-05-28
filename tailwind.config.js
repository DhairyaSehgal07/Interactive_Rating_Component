/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
        colors: {
        'White': 'var(--White)',
        'Light_Grey': 'var(--Light_Grey)',
        'Medium_Grey': 'var(--Medium_Grey)',
        'Dark_Blue': 'var(--Dark_Blue)',
        'Very_Dark_Blue': 'var(--Very_Dark_Blue)',
         'Sample':'var(--Sample)',

      },
    },
  },
  plugins: [],
}