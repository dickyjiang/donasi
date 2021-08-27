<template>
    <div>
       <Navbar/>
    </div>
  <div class="welcome mx-auto w-2/4 mt-10 text-center">
      <p class="text-center text-6xl font-serif font-bold text-gray-800">Welcome</p>
      <div class="p-10 border-4 border-gray-800 mt-12 shadow-2xl" v-if="showLogin">
        <h2 class="font-semibold text-2xl text-yellow-700 ">Login</h2>
        <LoginForm @login="enterChat" />
        <p class="text-md font-dmmono text-gray-800 mt-8">No account yet? <span class="cursor-pointer italic font-bold text-yellow-700" @click="showLogin = false"> Signup </span>instead</p>
      </div>
      <div class="p-10 border-4 border-gray-800 mt-12 shadow-2xl"  v-else>
          <h2 class="font-semibold text-2xl text-yellow-700 ">Sign up</h2>
           <SignupForm @signup="enterChat" />
            <p class="text-md font-dmmono text-gray-800 mt-8">Already have an account? <span class="cursor-pointer italic font-bold text-yellow-700" @click="showLogin = true"> Login </span>instead</p>
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