<template>
  <div>
    <the-nav-bar></the-nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavBar from '../components/TodoApp/UI/TheNavBar.vue'

export default {
  name: "Home",
  components: {
    TheNavBar
  }
};
</script>
