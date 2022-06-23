const { defineConfig } = require('@vue/cli-service')
// 后端请求地址 注意[他会根据你环境的不同从而获取的 env 文件不同]
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 所有的接口请求代理
    proxy: {
      '/api': {
        target: process.env.BASE_API,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
