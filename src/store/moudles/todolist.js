export default {
  namespaced: true,
  state: {
    todolist: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  getters: {},
  mutations: {
    setTodoList(state, payload) {
      state.todolist.push(payload)
    },
    delTodoList(state, payload) {
      state.todolist = payload
    }
  },
  actions: {
    SetTodoList({ commit }, payload) {
      commit('setTodoList', payload)
    },
    DelTodoList({ commit }, payload) {
      commit('delTodoList', payload)
    }
  }
}
