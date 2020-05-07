/*
 * @Author: 张天昊
 * @Date: 2020-05-07 14:54:48
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 15:41:45
 * @Description:
 */
import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    name: '',
    spaState: {},
  },
  mutations: {
    SET_SPA_NAME(state, payload) {
      state.name = payload.name
    },
    SET_SPA_STATE(state, payload) {
      Vue.set(state, 'spaState', payload)
    },
  },
  actions: {
    updateSpaName({ commit }, payload) {
      commit('SET_SPA_NAME', { name: payload.name })
    },
    updateSpaState({ commit }, payload) {
      commit('SET_SPA_STATE', payload)
    },
  },
}
