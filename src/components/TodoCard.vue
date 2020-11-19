<template>
  <div class="card">
    <div class="card-content">
      <add-task-btn></add-task-btn>

      <div class="tabs">
        <div class="myTodos">
          <h3>My Todos</h3>
        </div>
        <div class="incompleteTodos">
          <h3>My Incompleted Todos</h3>
        </div>
        <div class="completedTodos"
        >
          <h3>My Completed Todos</h3>
        </div>
      </div>

      <div class="tableContainer">
        <table>
          <tr
            v-for="(todo, index) in todos" :key="todo.id"
            @dblclick="deleteTodo(index)"
            @click="setData(index)"
            class="taskList">

            <td class="taskName">{{ todo.title }}</td>
            <td class="taskStatus">{{ todo.status }}</td>
            <td class="taskDue">Due on: {{ todo.due }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div> 
</template>

<script>
import axios from 'axios'
import AddTaskBtn from '@/components/AddTaskBtn'

export default {
  
  components: {
    AddTaskBtn,
  },

  computed: {
    todos() {
      return this.$store.getters.getTodoList
    }
  },

  data() {
    return {
      isDone: false
      // todos: []
    }
  },
  methods: {

    setData(index) {
      if(this.todos[index].status === "pending") {
          this.todos[index].status = "completed"
        } else if (this.todos[index].status === "completed") {
          this.todos[index].status = "pending"
        }
    },

   /*  switchStatus() {
      this.isDone = !this.isDone
    },

    setStatus(index) {
      if(this.isDone = false) {
        this.todos[index].status = "pending"
      } else if (this.isDone = true) {
        this.todos[index].status = "completed"
      }
      
    }, */
    
    deleteTodo(index) {
      this.todos.splice(index, 1);
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

// Task List

.tableContainer {
  min-height: 300px;
  max-height: 650px;
  overflow-y:scroll;
  scrollbar-base-color:gold;
  border-radius: 8px;
  background-color: #FCFBFA;
  margin: 10px 0;
}

table {
  order: 1;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

tr:nth-child(odd) {
    background-color: white;
}
tr:nth-child(even) {
    background-color: #FCFBFA;
}

tr {
  border-bottom: 1px solid rgb(209, 209, 209);
}

td {
    padding: 1em;
    font-size: .9em;
    opacity: .8;
    min-width: 90px;
}

// Buttons for task filter

.tabs {
  order: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  height: 40px;
}

.myTodos, .incompleteTodos, .completedTodos {
  background-color: #588757;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FCFBFA;
  border-radius: 8px;
  padding: 5px;
  min-width: 90px;
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

  .tableContainer {
    background-color: #FCFBFA;
    min-height: 500px;
    max-height: 650px;
  }

}


/* Desktop menu */
@media all and (min-width: 960px) {
  .card {
    padding: 50px;
  }

  // Task List

  .tableContainer {
    background-color: #FCFBFA;
    min-height: 500px;
    max-height: 650px;
  }

  table {
    order: 1;
  }

  td {
      font-size: 1em;
  }

  // Buttons for task filter

  .tabs {
    order: 0;
  }

  .tabs h3 {
    font-size: 16px;
  }
}


</style>