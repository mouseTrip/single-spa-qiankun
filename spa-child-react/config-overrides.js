/*
 * @Author: 张天昊
 * @Date: 2020-05-06 17:53:32
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 09:28:09
 * @Description:
 */
const { override, overrideDevServer } = require('customize-cra')
const { name } = require('./package')

const addCustomize = () => (config) => {
  config.devtool = false
  config.output.library = `${name}-[name]`
  config.output.libraryTarget = 'umd'
  config.output.jsonpFunction = `webpackJsonp_${name}`
  config.output.globalObject = 'window'
  return config
}
const addDevServer = () => config => {
  return {
    ...config,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    hot: false,
    watchContentBase: false,
    liveReload: false
  }
}

module.exports = {
  webpack: override(
    addCustomize()
  ),
  devServer: overrideDevServer(
    addDevServer()
  )
}
