// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['**/*.ts', '**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
      },
      animation: {
        'wobble-hor-bottom': 'wobble-hor-bottom 0.8s ease both',
        'scale-and-scale': 'scale-and-scale 0.8s both',
      },
      keyframes: {
        'wobble-hor-bottom': {
          '0%,to': {
            transform: 'translateX(0%)',
            'transform-origin': '50% 50%',
          },
          '15%': {
            transform: 'translateX(-30px) rotate(-6deg)',
          },
          '30%': {
            transform: 'translateX(15px) rotate(6deg)',
          },
          '45%': {
            transform: 'translateX(-15px) rotate(-3.6deg)',
          },
          '60%': {
            transform: 'translateX(9px) rotate(2.4deg)',
          },
          '75%': {
            transform: 'translateX(-6px) rotate(-1.2deg)',
          },
        },
        'scale-and-scale': {
          '0%,to': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.2)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
