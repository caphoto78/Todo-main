import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: null,
    email: null,
    token: null,
/*     todos: [

    ] */
  },
  mutations: {
    saveLoginData: (state, loginData) => {
      state.name = loginData.name
      state.token = loginData.token
      state.email = loginData.email
      localStorage.setItem('name', state.name)
      localStorage.setItem('token', state.token)
    },
    clearLoginData: (state) => {
        state.name = null
        state.token = null
        state.email = null
        localStorage.removeItem('name')
        localStorage.removeItem('token')
    },
    initializeStore: (state) => {
        if (localStorage.getItem('name')) {
            state.name = localStorage.getItem('name')
        }
        if (localStorage.getItem('token')) {
            state.token = localStorage.getItem('token')
        }
    },  
    /* ADD_TASK(state, task) {
      state.todos.push({
        id: task.id,
        title: task.title,
        due: task.due,
        completed: task.status
      });
    }, */
  },
  actions: {
    /* addTask({ commit }, task) {
      commit("ADD_TASK", task);
      task.title = "";
    }, */
    addTask(context, task) {
      context.commit('ADD_TASK', task)
    }
  },
  getters: {
    getTodoList: (state) => state.todos
  },
  modules: {}
});
