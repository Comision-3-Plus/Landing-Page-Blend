/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f8fa',
          100: '#d9eff4',
          200: '#b8dfe9',
          300: '#8cc9d9',
          400: '#5B9AA9',
          500: '#4a8091',
          600: '#3d6779',
          700: '#345564',
          800: '#2d4754',
          900: '#1f3138',
        },
        accent: {
          50: '#faf7f2',
          100: '#f5ede0',
          200: '#eddbb8',
          300: '#e3c797',
          400: '#C8A882',
          500: '#b5926d',
          600: '#9d7b5a',
          700: '#82654a',
          800: '#6b533e',
          900: '#584535',
        },
        dark: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#a8a8a8',
          400: '#7a7a7a',
          500: '#5a5a5a',
          600: '#3A3A3A',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#0f0f0f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
