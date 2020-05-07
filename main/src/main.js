import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './subAppRegister'
import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#main-framework')
