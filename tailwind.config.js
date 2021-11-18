module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
    './dist/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        primary: 'red',
        secondary: 'gray',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
