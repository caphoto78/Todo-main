<template>
    <div class="addNewTask" @click="newTodo()">
      <div class="circle">
         <span style="font-size: 1.3em; color: grey;">
          <i class="fas fa-plus"></i>
        </span>
      </div>
     
      <div class="titleAdd">
        <h1>Add a new Todo</h1>
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

<style lang="scss" scoped>
  .addNewTask {
    padding: 10px;
    display: flex;
    flex-wrap: nowrap;
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    background-color: #FCFBFA;
    min-width: 260px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05), 
              0 2px 2px rgba(0,0,0,0.05), 
              0 4px 4px rgba(0,0,0,0.05), 
              0 8px 8px rgba(0,0,0,0.05),
              0 16px 16px rgba(0,0,0,0.05);
  }
  .circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid grey;
    position: relative;
    display: block;
    position: relative;
    margin-right: 25px;
  }
  .circle span {
    margin-left: 7px;
    line-height: 32px;
  }

  .titleAdd {
    font-size: 12px;
  }

</style>