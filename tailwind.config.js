module.exports = {
  purge: false,
  theme: {
    purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
    extend: {
      fontSize: {
       '7xl': '5rem',
       '8xl': '6rem',
      },
      opacity: {
        '90': '.9',
      },
    },
  },
  variants: {},
  plugins: [],
}
