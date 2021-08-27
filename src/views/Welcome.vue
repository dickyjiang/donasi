<template>
    <div>
       <Navbar/>
    </div>
  <div class="welcome mx-auto w-2/4 mt-4 ">
      <p class="text-center text-2xl font-dmserif font-serif font-bold text-gray-800">Welcome</p>
      <div v-if="showLogin">
        <h2>Login</h2>
        <LoginForm @login="enterChat" />
        <p>No account yet? <span @click="showLogin = false"> Signup </span>instead</p>
      </div>
      <div v-else>
          <h2>Sign up</h2>
           <SignupForm @signup="enterChat" />
            <p>Already have an account? <span @click="showLogin = true"> Login </span>instead</p>
      </div>
     
  </div>
</template>

<script>

import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter} from 'vue-router'
import Navbar from '../components/Navbar.vue'

export default {
    components: { Navbar, SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true)
        const router = useRouter()

        const enterChat = () => {
            router.push({ name: 'Home' })

        }

        return { showLogin, enterChat }
    }


}
</script>


<style>
/* .welcome {
    text-align: center;
    padding: 20px 0;
    }

.welcome form {
    width: 300px;
    margin: 20px auto;
    }
.welcome label {
    display: block;
     margin: 20px auto;
    }
.welcome input { 
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline:  none;
    color: #999;
    margin: 10px auto;
}
.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button {
    margin: 2opx auto;
} */

</style>