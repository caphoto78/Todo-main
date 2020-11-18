<template>
  <div>
    <div class="addNewTask" @click="newTodo()">
      <div class="circle">
        <font-awesome-icon :style="{ color: 'grey' }" size="2x" icon="plus" />
      </div>
      <div class="titleAdd">
        <h1>Add a new Todo</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addTaskBtn",
  methods: {
    newTodo() {
      this.$router.push('/todos/add');
    },
  },
}
</script>

<style>
  .circle {
    width: 60px;
    height: 56px;
    border-radius: 50%;
    border: 8px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }

  .addNewTask {
    width: 330px;
    height: 70px;
    display: flex;
    cursor: pointer;
  }

  .titleAdd {
    margin-top: 5px;
    font-size: size(30px);
  }

</style>