/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1ed',
          100: '#ffe4db',
          200: '#ffc8b7',
          300: '#ffa386',
          400: '#ff7954',
          500: '#ff6b4a', // Cancer Seva Orange
          600: '#ed4d2d',
          700: '#c53821',
          800: '#9f2d1f',
          900: '#82271e',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#4CAF50', // Cancer Seva Green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      }
    },
  },
  plugins: [],
};