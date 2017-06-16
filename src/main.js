import Vue from 'vue'
import App from './App'
import store from './vuex/index.js'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
