module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        '1/2': '50%',
        '4/5': '85%',
       },
      colors: {
        dark: '#222831',
        darkGrey: '#393E46',
        primary: '#17B978',
        lightGrey: '#b9b9b9',
      },
      spacing: {
        102: '30rem',
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif'],
        carter: ['Carter One', 'ui-sans-serif'],
      },
      rotate: {
        135: '135deg',
      },
      keyframes: {
        scaleIn: {
          from: { opacity: '0' },
          to: { opacity: '100' },
        },
        fadeIn: {
          from: { transform: 'scale(0.7)' },
          to: { transform: 'scale(1)' },
        },
        fadeUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0%)' },
        },
        fadeInLeft: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-in-out',
        fadeUp: 'fadeUp 500ms ease-in-out',
        fadeInLeft: 'fadeInLeft 500ms ease-in-out both',
        scaleIn: 'scaleIn 250ms ease-in-out both',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
