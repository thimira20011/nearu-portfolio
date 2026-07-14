/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          coral: {
            DEFAULT: '#e05638',
            light: '#f35c3e',
            dark: '#c23c21',
            glow: 'rgba(224, 86, 56, 0.15)',
          },
          blue: {
            DEFAULT: '#0f4c81',
            light: '#1a6ac2',
            dark: '#0a3256',
            glow: 'rgba(15, 76, 129, 0.15)',
          },
          sapphire: '#2563eb',
        },
        dark: {
          bg: '#030508',
          card: '#0b0e17',
          border: 'rgba(224, 86, 56, 0.12)',
        }
      }
    },
  },
  plugins: [],
}
