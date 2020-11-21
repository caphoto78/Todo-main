import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: null,
    email: null,
    token: null,
    todos: [

    ]
  },
  mutations: {
    // saveLoginData: (state, loginData) => {
    //   state.name = loginData.name
    //   state.token = loginData.token
    //   state.email = loginData.email
    //   localStorage.setItem('name', state.name)
    //   localStorage.setItem('token', state.token)
    // },
    // clearLoginData: (state) => {
    //     state.name = null
    //     state.token = null
    //     state.email = null
    //     localStorage.removeItem('name')
    //     localStorage.removeItem('token')
    // },
    // initializeStore: (state) => {
    //     if (localStorage.getItem('name')) {
    //         state.name = localStorage.getItem('name')
    //     }
    //     if (localStorage.getItem('token')) {
    //         state.token = localStorage.getItem('token')
    //     }
    // }, 

    ADD_TASK(state, task) {
      state.todos.push({
        id: task.id,
        title: task.title,
        status: task.status,
        due: task.due
      })
    },
    DELETE_TASK(state, task) {
      const index = state.todos.findIndex(todo => todo.id === task);
      state.todos.splice(index, 1);
    }
  },
  actions: {
    addTask(context, task) {
      context.commit('ADD_TASK', task)
    },
    deleteTask(context, task) {
      context.commit('DELETE_TASK', task)
    }
  },
  getters: {
    getTodoList: (state) => state.todos,
    getTodosCompleted: (state) => {
      return state.todos.filter(todo => todo.status === "completed");
    },
    getTodosPending: (state) => {
      return state.todos.filter(todo => todo.status === "pending");
    },
  },
  modules: {}
});
