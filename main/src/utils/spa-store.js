/*
 * @Author: 张天昊
 * @Date: 2020-05-07 10:02:18
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 15:28:34
 * @Description:
 */
import { initGlobalState } from 'qiankun'
import store from '../store'

const INITIAL_STATE = {
  user: 'admin',
  msg: '',
}

const { onGlobalStateChange, setGlobalState } = initGlobalState(INITIAL_STATE)

onGlobalStateChange((value, prev) => {
  console.log('[onGlobalStateChange - main]:', value, prev)
  store.dispatch('updateSpa', value)
})

export { setGlobalState }
