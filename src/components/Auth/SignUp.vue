<template>
  <div class="card">
    <div class="card-content">
      <div class="card-header">
        <img class="logo" src="~@/assets/logo_oracle.gif" alt="">
        <h2 class="title"><slot /></h2>
      </div>
      <form class="form">
        <div class="appControl">
          <AppControlInput 
              v-model="username"
              type="text" 
              required
              >
              Username
          </AppControlInput>
          <AppControlInput
              v-model="email"
              type="email" 
              required
              >
              Email
          </AppControlInput>
          
          <AppControlInput
              v-model="password"
              type="password"
              required
              >
              Password
          </AppControlInput>
          <AppControlInput
              v-model="rpassword"
              type="password"
              >
              Re-type Password
          </AppControlInput>
          <AppControlInput 
              v-model="website"
              type="url"
              >
              Website
          </AppControlInput>
          <AppControlInput
              v-model="phone"
              type="phone"
              >
              Phone
          </AppControlInput>
        </div>
        <div class="buttons">
          <LoginBtn
            type = "button"
            title="Faceti click aici pentru crearea unui cont nou"
            @click="back"
            >Back
          </LoginBtn>
          <LoginBtn
            type = "submit"
            @click="signup"
            title="Faceti click aici pentru conectare"
            >Create Account
          </LoginBtn>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LoginBtn from '@/components/UI/LoginBtn'
import AppControlInput from '@/components/UI/AppControlInput'
import axios from 'axios'

export default {
  components: {
    LoginBtn,
    AppControlInput
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      rpassword: '',
      website: '',
      phone: ''
    }
  },
  methods: {
    // validateEmail(value){
    //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    //       this.msg['email'] = '';
    //     } else{
    //       this.msg['email'] = 'Invalid Email Address';
    //     } 
    // },
    back() {
      this.$router.push('/signin');
    },
    signup() {
      console.log('Signed up')
      axios
        .post(
            'http://localhost:8000/user',
            {
                username: this.username,
                email: this.email,
                password: this.password,
                website: this.website,
                phone: this.phone
            }
        )
        .then(this.$router.push('/signin'))
        .catch(error => console.log(error));
    }
  },
}
</script>

<style scoped>
.card {
  position: relative;
  z-index: 1;
}

.card-content {
  animation: fadeIn 1.2s 0 1 cubic-bezier(0, 0, 0.2, 1);
  width: 650px;
  padding: 30px;
  margin: 6rem auto;
  background: #FCFBFA;
  border-radius: 8px;
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

.logo {
  margin-top: 10px;
}

.title {
  margin: 40px 0 20px 0;
  font-size: size(30);
}

input[type="checkbox"] {
  margin-right: 10px;
}

.social {
  margin: 40px 0;
  text-align: center;
}

.buttons {
  margin-top: 50px;
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
    margin-bottom: 30px;
  }
}

</style>
