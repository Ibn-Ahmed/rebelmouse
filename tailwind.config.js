/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm': {'max':'570px'},
      // 's':{'max':'341px'},
      'sm': {'max':'640px'},

      'md': {'max':'768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'max':'1066px'},
      'mlg':{'min':'1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extends:{transitionProperty: {
      'width': 'width'
  },},
  },
  variants:{
    border: ['focus'],
  },
  plugins: [],
}
