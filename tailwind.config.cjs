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
        }
      },
    },
    plugins: [],
  }