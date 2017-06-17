import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions'

Vue.use(Vuex)

const state = {
  tableList: [],
  inputUser: {
    name: '',
    tel: ''
  },
  editorData: {
    name: '',
    tel: ''
  },
  loading: true
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
