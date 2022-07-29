export default {
  namespaced: true,
  state: {
    color: 'pink'
  },
  getters: {},
  mutations: {
    changColor(state, payload) {
      state.color = payload
    }
  },
  actions: {
    ChangeColor({ commit }, payload) {
      commit('changColor', payload)
    }
  }
}
