/*
 * @Author: 张天昊
 * @Date: 2020-05-07 10:17:51
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 16:24:03
 * @Description:
 */
import store from '@/store'
let setSpaState = null
const spaStore = (props = {}) => {
  const { onGlobalStateChange, setGlobalState } = props
  if (onGlobalStateChange) {
    onGlobalStateChange((value, prev) => {
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev)
      store.dispatch('spa/updateSpaName', { name: props.name })
      store.dispatch('spa/updateSpaState', value)
    }, true)
  }
  if (setGlobalState) {
    setSpaState = setGlobalState
  }
}

export { setSpaState }
export default spaStore
