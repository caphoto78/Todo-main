import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    email: null,
    token: null,
    newTask: '',
    todos: []
  },
  mutations: {
    saveLoginData: (state, loginData) => {
      state.username = loginData.username
      state.email = loginData.email
      state.token = loginData.token
      localStorage.setItem('username', state.username)
      localStorage.setItem('token', state.token)
    },
    clearLoginData: (state) => {
      state.username = null
      state.token = null
      state.email = null
      localStorage.removeItem('username')
      localStorage.removeItem('token')
    },
    initializeStore: (state) => {
      if (localStorage.getItem('username')) {
        state.username = localStorage.getItem('username')
      }
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
      }
    },

    ADD_TASK(state, task) {
      console.log(task);
      state.todos.push({
        id: task.id,
        title: task.title,
        status: task.status,
        due: task.due
      })
      
    },

    GET_TASKS(state, tasks) {
      state.todos = tasks
    },

    DELETE_TASK(state, task) {
      const index = state.todos.findIndex(todo => todo.id === task.id);
      state.todos.splice(index, 1);
    },

    TOGGLE_STATUS(state, task) {
      const item = state.todos.find(todo => todo.id === task);
      if (item.status === "pending") {
        item.status = "completed";
      } else if (item.status === "completed") {
        item.status = "pending";
      }
    },
 /*    GET_TASK(state, task) {
      state.newTask = task
    },
    CLEAR_TASK(state) {
      state.newTask = ''
    } */
  },
  actions: {

    async getTasks({ commit }) {
      const response = await axios
        .get(
          'http://localhost:8000/todos',
          {
            headers: { Authorization: `Bearer ${this.state.token}` }
          }
        )
        .then((response) =>  {
          console.log(response.data);
          commit('GET_TASKS', response.data);
        })
        .catch(error => {
          console.log(error);
        })
    },

    async addTask({ commit }, task) {
      const response = await axios
        .post(
          'http://localhost:8000/todos',
          {
            id: task.id,
            title: task.title,
            status: task.status,
            due: task.due
          },
          {
            headers: {
              Authorization: `Bearer ${this.state.token}`
            }
          }
        )
        .then((response) => {
          commit('ADD_TASK', JSON.parse(response.config.data))
        })
        .catch(error => {
          console.log(error)
        })
    },

    async deleteTask({ commit }, task) {
      const response = await axios
        .delete(
          `http://localhost:8000/todos/${task.id}`,
          task,
          {
            headers: {
              Authorization: `Bearer ${this.state.token}`
            }
          }
        )
        .then(() => {
          console.log("TASK: " + task);
          commit('DELETE_TASK', task)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async toggleStatus({ commit }, task) {
      const response = await axios
        .put(
          'http://localhost:8000/todos',
          task,
          {
            headers: {
              Authorization: `Bearer ${this.state.token}`
            }
          }
        )
        .then((task) => {
          commit('TOGGLE_STATUS', task)
        })
        .catch(error => {
          console.log(error)
        })
    },
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
