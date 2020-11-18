<template>
  <div>
    <the-nav-bar />
    <todo-card />
  </div>
</template>

<script>
import TodoCard from '../components/TodoCard.vue'
import TheNavBar from '../components/UI/TheNavBar.vue'
export default {
  components: {
    TheNavBar,
    TodoCard
  }
}
</script>

<style lang="scss">

div {
  z-index: 1;
  position: relative;
}

</style>
