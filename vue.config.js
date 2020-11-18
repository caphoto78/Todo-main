/* module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
    }
  }
} */

css: {
  loaderOptions: {
    sass: {
      data: `
        @import "@/scss/assets/_global.scss";
        @import "@/scss/assets/_typo.scss";
        @import "@/scss/assets/_variables.scss";
      `
    }
  }
}