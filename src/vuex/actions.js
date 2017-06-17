
export default {
  toggleLoading: ({ commit }) => commit('TOGGLE_LOADING'),
  restForm: ({ commit }) => commit('REST_FORM'),
  addUser: ({ commit }) => commit('ADD_USER'),
  fetchData: ({ commit }) => commit('FETCH_DATA'),
  deleUser: ({ commit }, state) => commit('DELE_USER', state),
  editorUser: ({ commit }, state) => commit('EDITOR_USER', state)
}
