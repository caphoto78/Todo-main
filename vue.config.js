module.exports = {
  devServer: {
    proxy: {
      '^/': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
    }
  }
}