// tailwind.config.js
module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './data/**/*.md'
    ],

    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded'
      ]
    },
  },
  theme: {
    extend: {
      colors: {
        'light-turquoise': '#79CED8',
        'dark-turquoise': '#23BDC5',
        'darker-turquoise': '#1FA5AC',
        'dark-red': '#DC3833',
        'light-gray': '#f4f7f8'
      }
    },
    container: {
      center: true
    }
  },
  variants: {},
  plugins: [],
}
