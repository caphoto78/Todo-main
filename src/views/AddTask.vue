<template>
  <div>

    <the-nav-bar />

    <div class="card">
      <div class="card-content">

        <h1>Add a New Todo</h1>
        <app-control-input v-model="task.title" type="text">My Todo</app-control-input>
        <app-control-input v-model="task.due" type="date"></app-control-input>
        <app-control-input v-model="task.status" controlType="list">Status</app-control-input>
      
        <login-btn class="login-btn" @click="addTask">Add Todo</login-btn>

    </div>
  </div>

  </div>
</template>

<script>
import AppControlInput from '../components/UI/AppControlInput.vue'
import LoginBtn from '../components/UI/LoginBtn.vue'
import TheNavBar from '../components/UI/TheNavBar.vue'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export default {
  components: {
    TheNavBar,
    AppControlInput,
    LoginBtn
  },
  data() {
    return {
      task: {
        id: uuidv4(),
        title: "",
        due: "",
        status: ""
      }
    }
  },
  methods: {

    addTask() {
      this.$router.push('/todos');
      this.$store.dispatch('addTask', this.task);
    },

    // addTask() {
    //   axios
    //     .post(
    //       'http://localhost:8000/posts',
    //       {
    //         id: this.id,
    //         title: this.title,
    //         due: this.due,
    //         status: this.status
    //       },
    //       {
    //         headers: { Authorization: `Bearer ${store.state.token}` }
    //       }
    //     )
    //     .then(() => {
    //         this.$router.push('/todos')
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // },
  },
}
</script>

<style lang="scss" scoped>

div {
  z-index: 1;
  position: relative;
}

.card {
  position: relative;
  z-index: 1;
}

.card-content {
  animation: fadeIn 1.2s 0 1 cubic-bezier(0, 0, 0.2, 1);
  width: 80%;
  max-height: 480px;
  min-height: 400px;
  padding: 30px;
  margin: 6rem auto;
  background: #FCFBFA;
  border-radius: 8px;
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

h1 {
  margin-left: 10px;
  margin-bottom: 20px;
}

.login-btn {
  margin: 50px 0 10px 10px
}

@media (max-width: 500px), (max-height: 620px) {
  .card {
    height: 100vw;
  }
  .card-content{
    width: 100%;
    height: 100vw;
    margin: 0 auto;
    box-sizing: border-box;
    animation: fadeIn 0s 0s 1 ease forwards;
  }
}

</style>
