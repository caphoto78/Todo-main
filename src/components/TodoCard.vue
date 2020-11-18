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
        <div class="completedTodos">
          <h3>My Completed Todos</h3>
        </div>
      </div>
    <todo-task-list></todo-task-list>
      
    </div>
  </div>
</template>

<script>
import AddTaskBtn from '@/components/AddTaskBtn'
import TodoTaskList from './TodoTaskList.vue'
export default {
  
  components: {
    AddTaskBtn,
    TodoTaskList,
  },
  data() {
    return {
      
    }
  },
  
}
</script>

<style lang="scss">
  .card {
  position: relative;
  z-index: 1;
}

.card-content {
  animation: fadeIn 1.2s 0 1 cubic-bezier(0, 0, 0.2, 1);
  width: 80%;
  height: 60vh;
  padding: 30px;
  margin: 6rem auto;
  background: #FCFBFA;
  border-radius: 8px;
  min-width: 600px;
  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    background-image: url('~@/assets/top_image.jpg') !important;
    background-position: 58% 20% !important;
    background-repeat: no-repeat !important;
    background-size: cover;
    background-attachment: fixed !important;
    height: 100% !important;
  }
}

.tabs {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3px;
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
  min-width: 177px;
}

.tabs h3 {
  font-size: 16px;
}

@keyframes fadeIn {
  0% {
    transform: translateY(2.5em);
    opacity: 0;
  }
  35% {
    transform: translateY(2.5em);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>