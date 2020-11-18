<template>
<div>
  <div v-for="todo in todos" :key="todo.id" class="taskList">
    <div class="taskName">
      <h3>{{ todo.title }}</h3>
    </div>
    <div class="taskStatus">
      <h3>{{ todo.completed }}</h3>
    </div>
    <div class="taskDue">
      <h3>Due on: {{todo.due}}</h3>
    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodoList
    }
  },
  data() {
    return {
      // todos: []
    }
  },
  methods: {
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

<style>
  .taskList {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3px;
  height: 40px;
}

.taskName {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid silver;
}

.taskStatus {
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid silver;
}

.taskDue {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid silver;
}

</style>