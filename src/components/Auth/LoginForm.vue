<template>
  <div class="card">
    <div class="card-content">
      <!-- <img class="top-image" src="~/assets/top_image.jpg" alt="top-image"> -->
      <div class="card-header">
        <img class="logo" src="~@/assets/logo_oracle.gif" alt="logo">
        <h2 class="title"><slot /></h2>
      </div>
      <form class="form" @submit.prevent="submitForm">
        <div class="appControl">
          <AppControlInput 
            v-model="username" 
            type="text"
            >Username
          </AppControlInput>
          <AppControlInput 
            v-model="password" 
            type="password"
            >Password
          </AppControlInput>
        </div>
        <div class="remember">
          <input type="checkbox" name="remember" id="remember">
          <label for="remember">Remember me</label>
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 characters long).</p>
        <div class="social">
          <a href="#" target="_blank" rel="noopener noreferrer">Login using social account</a>
        </div>

        <div class="buttons">
          <LoginBtn
            type = "button"
            title="Faceti click aici pentru crearea unui cont nou"
            @click="register"
            >Register
          </LoginBtn>
          <LoginBtn
            type = "submit"
            title="Faceti click aici pentru conectare"
            @click='login'
            >Login
          </LoginBtn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LoginBtn from '@/components/TodoApp/UI/LoginBtn'
import AppControlInput from '@/components/TodoApp/UI/AppControlInput'

export default {
  components: {
    LoginBtn,
    AppControlInput
  },
  data() {
    return {
      username: '',
      password: '',
      formIsValid: true,
    }
  },
  methods: {
    register() {
      this.$router.push('/signup');
    },
    
    login() {
      this.formIsValid = true;
      if (
        this.email === '' || 
        !this.email.includes('@') || 
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
    },


    // login() {
    //   axios
    //     .get(
    //       'http://localhost:8000/user/login',
    //       {
    //         params: {
    //           username: this.username,
    //           password: this.password
    //         }
    //     }
    //     )
    //     .then(result => {
    //       this.loginFailed = false
    //       console.log(result.data)
    //       store.commit('saveLoginData', {
    //           name: result.data.name,
    //           email: result.data.email,
    //           token: result.data.token
    //       })
    //       this.$router.push('/todos')
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         this.loginFailed = true
    //     })
    //   }
    },
  }

</script>

<style lang="scss" scoped>
.card {
  position: relative;
  z-index: 10;
}

.card-content {
  animation: fadeIn 1.2s 0 1 cubic-bezier(0, 0, 0.2, 1);
  width: 460px;
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
.top-image {
  width: 100%;
  border-radius: 8px;
}

.logo {
  margin-top: 10px;
}

.title {
  margin: 30px 0 20px 0;
  font-size: size(30);
}

.appControl {
  margin: -10px -10px 0px -10px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.social {
  margin: 40px 0;
  text-align: center;
}

.buttons {
  margin-top: 6px;
  clear: both;
  display: flex;
  justify-content: space-between;
}

.remember {
  display: block;
  margin: 24px 0
}

@media (max-width: 500px), (max-height: 620px) {
  .card-content{
    width: 100%;
    height: 100vh;
    min-width: 400px;
    margin: 0 auto;
    box-sizing: border-box;
    animation: fadeIn 0s 0s 1 ease forwards;
  }
  h2 {
    margin: 0 0 10px 0 !important;
  }
  .logo {
    margin-bottom: 70px;
  }
  .form {
    margin: 50px 0;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
  }
  .buttons .button {
    display: block;
  }
}

</style>