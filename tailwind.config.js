/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './sections/**/*.{js,jsx}',
    './styles/**/*.{js,jsx}',
    './utils/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#100D0D',
        'hover-black': '#0a0a0a',
        white: '#ffffff',
        grey: '#a3a3a3',
        vivid: '#FF0000',
        dimGrey: '#777777',
        poop: '#aa8c46',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
      aspectRatio: {
        wide: '2 / 1',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
};
