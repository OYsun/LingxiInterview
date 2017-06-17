import * as type from './mutations-type'
import axios from 'axios'
import { local } from '../util/localStorage.js'

export default {
  // 切换loading状态
  [type.TOGGLE_LOADING] (state) {
    state.loading = !state.loading
  },

  // 重置表单输入框
  [type.REST_FORM] (state) {
    state.inputUser.name = ''
    state.inputUser.tel = ''
  },

  // 增加联系人
  [type.ADD_USER] (state) {
    const newData = {
      name: state.inputUser.name,
      tel: state.inputUser.tel
    }
    state.tableList.push(newData)
    local.set(state.tableList)
  },

  // 如果本地local有数据则读取，没有则 axios获取联系人（模拟数据）
  [type.FETCH_DATA] (state) {
    if (window.localStorage.lx_concat) {
      state.tableList = local.get()
    } else {
      axios.get('/static/mock/user.json').then((ret) => {
        state.tableList = ret.data
        local.set(state.tableList)
      })
    }
  },

  // 删除联系人
  [type.DELE_USER] (state, index) {
    state.tableList.splice(index, 1)
    local.set(state.tableList)
  },
  // 编辑联系人
  [type.EDITOR_USER] (state, index) {
    console.log(state.tableList[index].name)
    state.editorData.name = state.tableList[index].name
    state.editorData.tel = state.tableList[index].tel
  }
}
