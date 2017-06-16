
import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const state = {
  tableList: [],
  inputUser: {
    name: '',
    tel: ''
  },
  loading: true
}

const TOGGLE_LOADING = 'TOGGLE_LOADING'
const REST_FORM = 'REST_FORM'
const ADD_USER = 'ADD_USER'
const FETCH_DATA = 'FETCH_DATA'
const DELE_USER = 'DELE_USER'

const mutations = {
  /**
   * 切换loading状态 */
  [TOGGLE_LOADING] (state) {
    state.loading = !state.loading
  },

  /**
   * 重置表单输入框 */
  [REST_FORM] (state) {
    state.inputUser.name = ''
    state.inputUser.tel = ''
  },

  [ADD_USER] (state) {
    const newData = {
      name: state.inputUser.name,
      tel: state.inputUser.tel
    }
    state.tableList.push(newData)
  },
 /**
   * axios获取联系人（模拟数据） */
  [FETCH_DATA] (state) {
    axios.get('/static/mock/user.json').then((ret) => {
      state.tableList = ret.data
    })
  },

  /**
   * 删除联系人 */
  [DELE_USER] (state, index) {
    state.tableList.splice(index, 1)
  }
}

const actions = {

  toggleLoading ({ commit }) {
    commit('TOGGLE_LOADING')
  },
  restForm ({ commit }) {
    commit('REST_FORM')
  },
  addUser ({ commit }) {
    commit('ADD_USER')
  },
  fetchData ({ commit }) {
    commit('FETCH_DATA')
  },
  deleUser ({ commit }, state) {
    commit('DELE_USER', state)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
