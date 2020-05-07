/*
 * @Author: 张天昊
 * @Date: 2020-05-06 17:22:59
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-06 17:25:38
 * @Description:
 */
const { name } = require('./package')

const port = 3001 // dev port

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
}
