const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primaryPurple: '#402F71',
        primaryOrange: '#FB5C05',
        background: '#C7C7C7',
        textWhite: '#EBEBEB',
        textOnyx: '#3C3C3C',
      },
    },
  },
  plugins: [],
};
