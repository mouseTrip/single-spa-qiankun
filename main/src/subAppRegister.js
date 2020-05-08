/*
 * @Author: 张天昊
 * @Date: 2020-05-06 16:39:30
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-08 10:08:55
 * @Description:
 */
import {
  registerMicroApps,
  start,
  runAfterFirstMounted,
  setDefaultMountApp,
} from 'qiankun'
import './utils/spa-store'

const apps = [
  {
    name: 'spa-child-vue',
    entry: '//localhost:3001',
    container: '#sub-app-container',
    activeRule: '/vue',
  },
  {
    name: 'spa-child-react',
    entry: '//localhost:3002',
    container: '#sub-app-container',
    activeRule: '/react',
  },
]

const mainLifeCycles = {
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    },
  ],
}

registerMicroApps(apps, mainLifeCycles)

setDefaultMountApp('vue')

start({
  sandbox: { strictStyleIsolation: true },
})

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted')
})
