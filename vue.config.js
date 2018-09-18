const path = require('path')

const resolve = (...folder) => {
  return path.resolve(__dirname, 'src', ...folder)
}

module.exports = {
  pwa: {
    themeColor: '#722891',
    msTileColor: '#722891'
  },
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
        resolve('styles', 'imports.scss')
      ],
      preProcessor: 'scss'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'template': resolve('template')
      }
    }
  }
}
