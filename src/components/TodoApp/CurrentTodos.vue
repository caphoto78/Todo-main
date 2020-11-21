<template>
  <div class="tableContainer">
    <table>
      <tr
        v-for="(todo, index) in todos"
        :key="todo.id"
        @click="toggleStatus(todo.id)"
        class="taskList"
      >
        <td class="taskName">{{ todo.title }}</td>
        <td class="taskStatus">{{ todo.status }}</td>
        <td class="taskDue">Due on: {{ todo.due }}</td>
        <td @click.stop="deleteTodo(index)" class="taskDelete">
          <i class="fas fa-trash"></i>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.getTodosPending;
    },
  },

  data() {
    return {};
  },
  methods: {
    deleteTodo(task) {
      this.$store.dispatch("deleteTask", this.task);
    },
    toggleStatus(id) {
      this.$store.dispatch("toggleStatus", id);
    },

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
  .tableContainer {
    min-height: 300px;
    max-height: 650px;
    overflow-y: scroll;
    scrollbar-base-color: gold;
    border-radius: 8px;
    background-color: #fcfbfa;
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
    background-color: #fcfbfa;
  }

  tr {
    border-bottom: 1px solid rgb(209, 209, 209);
    &:hover {
      cursor: pointer;
    }
  }

  td {
    padding: 1em;
    font-size: 0.9em;
    opacity: 0.8;
    min-width: 90px;
    text-align: center;
  }

  .taskName {
    text-align: left;
  }

  .taskDelete {
    width: 20px;
    &:hover {
      color: #875757;
    }
  }

  /* Tablet menu */
  @media all and (min-width: 700px) {
    .tableContainer {
      background-color: #fcfbfa;
      min-height: 500px;
      max-height: 650px;
    }
  }

  /* Desktop menu */
@media all and (min-width: 960px) {
  .tableContainer {
    background-color: #fcfbfa;
    min-height: 500px;
    max-height: 650px;
  }
  table {
    order: 1;
  }

  td {
    font-size: 1em;
  }
}

</style>