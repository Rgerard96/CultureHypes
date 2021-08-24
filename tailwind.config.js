module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#222831',
        darkGrey: '#393E46',
        primary: '#FF2442',
        lightGrey: '#b9b9b9',
      },
      spacing: {
        102: '30rem',
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif'],
      },
      rotate: {
        135: '135deg',
      },
      keyframes: {
        fadeIn: {
          from: { transform: 'scale(0.7)' },
          to: { transform: 'scale(1)' },
        },
        fadeUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-in-out',
        fadeUp: 'fadeUp 500ms ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
