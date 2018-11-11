module.exports = {
    // parser: 'sugarss',
    plugins: {
    //   'postcss-import': {},
    //   'postcss-preset-env': {},
    //   'cssnano': {},
      'autoprefixer': {
        'browsers': ['> 1%', 'last 2 versions']
      }
    }
  }