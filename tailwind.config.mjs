/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8ff',
          100: '#e6f1fe',
          200: '#c9e2fd',
          300: '#9dcbfb',
          400: '#69aef8',
          500: '#3a90f0',
          600: '#2f73c9',
          700: '#285ea7',
          800: '#234e89',
          900: '#1f426f'
        },
        cyan: {
          500: '#06b6d4'
        },
        slate: {
          900: '#0f172a'
        }
      },
      boxShadow: {
        floating: '0 10px 25px rgba(3, 105, 161, 0.15)'
      }
    }
  },
  plugins: []
}
