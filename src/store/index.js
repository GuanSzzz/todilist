import Vue from 'vue'
import Vuex from 'vuex'
import createVuexPersisted from 'vuex-persistedstate'
// 引入模块
import todolist from './moudles/todolist'
import peeling from './moudles/peeling'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todolist,
    peeling
  },
  plugins: [createVuexPersisted()]
})
