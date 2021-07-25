module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#222831',
        darkGrey: '#393E46',
        teal: '#00ADB5',
        lightGrey: '#EEEEEE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
