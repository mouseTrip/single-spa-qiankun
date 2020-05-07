/*
 * @Author: 张天昊
 * @Date: 2020-05-07 15:53:08
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 16:20:04
 * @Description:
 */
import { handleActions, createAction } from 'redux-actions'
const INITIAL_STATE = {
  name: '',
  spaState: {},
}
export const SET_SPA_NAME = createAction('SET_SPA_NAME', ({ name }) => ({
  name,
}))
export const SET_SPA_STATE = createAction('SET_SPA_STATE', ({ value }) => ({
  value,
}))
export default handleActions(
  {
    SET_SPA_NAME(state, action) {
      const { name } = action.payload
      return {
        ...state,
        name: name || state.name,
      }
    },
    SET_SPA_STATE(state, action) {
      const { value } = action.payload
      return {
        ...state,
        spaState: value || state.spaState,
      }
    },
  },
  INITIAL_STATE
)
