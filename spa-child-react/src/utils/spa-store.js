/*
 * @Author: 张天昊
 * @Date: 2020-05-07 16:03:49
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 16:23:41
 * @Description:
 */
import store from '../store'
import { SET_SPA_NAME, SET_SPA_STATE } from '../store/spa'
let setSpaState = null
const spaStore = (props = {}) => {
  const { onGlobalStateChange, setGlobalState } = props
  if (onGlobalStateChange) {
    onGlobalStateChange((value, prev) => {
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev)
      store.dispatch(SET_SPA_NAME({ name: props.name }))
      store.dispatch(SET_SPA_STATE({ value }))
    }, true)
  }
  if (setGlobalState) {
    setSpaState = setGlobalState
  }
}

export { setSpaState }
export default spaStore
