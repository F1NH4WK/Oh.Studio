/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/**/*.tsx',
    './index.html'
    ],
    theme: {
      extend: {
        colors: {
          'background': '#121212',
          'navBar': 'rgba(40, 40, 40, 0.8)',
          'teste': '#212020'
        },
        keyframes: {
          load: {
            '0%': { opacity: 0, transform: 'translateY(2%)' },
            '100%': { opacity: 1, transform: 'translateY(0)'}
          }
        },
        animation: {
          load: 'load 1s ease-out'
        }
      },
    },
    plugins: [],
  }