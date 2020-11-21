<template>
  <div>
    <the-nav-bar />
    <div class="card">
      <div class="card-content">
        <add-task-btn></add-task-btn>

        <div class="tabs">
          <div :class="{active: all}" @click="showAll" class="myTodos">
            <h3>My Todos</h3>
          </div>
          <div :class="{active: current}" @click="showCurrent" class="incompleteTodos">
            <h3>My Incompleted Todos</h3>
          </div>
          <div :class="{active: completed}" @click="showCompleted" class="completedTodos">
            <h3>My Completed Todos</h3>
          </div>
        </div>
        <todos-all v-if="all"></todos-all>
        <completed-todos v-if="completed"></completed-todos>
        <current-todos v-if="current"></current-todos>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AddTaskBtn from "@/components/TodoApp/UI/AddTaskBtn";
import TheNavBar from "../components/TodoApp/UI/TheNavBar.vue";
import TodosAll from "../components/TodoApp/TodosAll.vue"
import CompletedTodos from "../components/TodoApp/CompletedTodos.vue"
import CurrentTodos from "../components/TodoApp/CurrentTodos.vue"

export default {
  components: {
    AddTaskBtn,
    TheNavBar,
    TodosAll,
    CompletedTodos,
    CurrentTodos
  },

  data() {
    return {
      all: true,
      current: false,
      completed: false,
    }
  },
  methods: {
    showAll() {
      this.all = true
      this.current = false
      this.completed = false
    },
    showCurrent() {
      this.all = false
      this.current = true
      this.completed = false
    },
    showCompleted() {
      this.all = false
      this.current = false
      this.completed = true
    }

    // del(id) {
    //   axios.delete(
    //     `http://localhost:8000/todos/${id}`,
    //     {
    //       headers: { Authorization: `Bearer ${this.$store.state.token}` }
    //     }
    //   ).then(() => this.getTodoList())
    //   .catch(err => console.log(err))
    // },
    // getTodoList() {
    //   axios.get(
    //     'http://localhost:8000/todos',
    //   {
    //     headers: { Authorization: `Bearer ${this.$store.state.token}` }
    //   }
    //   )
    //   .then(response => { this.todos = response.data; console.log(response.data) })
    //   .catch(err => console.log(err))
    // },
    // mounted() {
    //   this.getTodoList()
    // }
  },
}
</script>

<style lang="scss" scoped>
// Mobil

.card {
  position: relative;
  z-index: 1;
  padding: 15px;
  height: 100vh;
}

.card-content {
  margin: 110px 0 0 0;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

// Buttons for task filter

.tabs {
  order: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  height: 40px;
}

.myTodos,
.incompleteTodos,
.completedTodos {
  background-color: #588757;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fcfbfa;
  border-radius: 8px;
  padding: 5px;
  min-width: 90px;
  cursor: pointer;
  &:hover {
    background-color: #6a9d67;
  }
}

.active {
    background-color: #6a9d67;
  }

.tabs h3 {
  font-size: 12px;
  font-family: Oracle-Bold;
  text-align: center;
}

/* Tablet menu */
@media all and (min-width: 700px) {
  .card {
    padding: 30px;
    height: 100vh;
  }

}

/* Desktop menu */
@media all and (min-width: 960px) {
  .card {
    padding: 50px;
  }

  // Buttons for task filter

  .tabs {
    order: 0;
    margin-top: 10px;
  }

  .tabs h3 {
    font-size: 16px;
  }
}
</style>
