const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      // patterns: [path.join(__dirname, "./src/assets/style/index.less")],
      patterns: [],
    },
  },
  devServer: {
    // port: 8080,
    port: 80,
    open: true,
    // 配置本地获取数据代理
    proxy: {
      "/json": {
        // target: "http://localhost:8080/", // 对应服务器的接口   这里端口号写入自己的
        target: "http://www.kkkarlooo.cn:80/",
        changeOrigin: true,
        pathRewrite: {
          "^/json": "/",
        },
      },

    }
  }
})