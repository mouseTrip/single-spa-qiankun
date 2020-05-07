/*
 * @Author: 张天昊
 * @Date: 2020-05-06 16:32:41
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 15:31:05
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spa: {},
  },
  mutations: {
    SET_SPA(state, payload) {
      Vue.set(state, 'spa', payload)
    },
  },
  actions: {
    updateSpa({ commit }, payload) {
      commit('SET_SPA', payload)
    },
  },
  modules: {},
})
