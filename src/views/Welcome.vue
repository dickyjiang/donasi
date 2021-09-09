<template>
    <!-- <div>
    <Navbar />
  </div> -->
  <div class="relative bg-yellow-50 m-h-screen">
      <img class="absolute top-0 inset-x-72 -mt-72 " src="../assets/blob_yellow.svg">
      <div class="relative px-12 pt-12 pb-10 mx-auto max-w-5x ">
        <div class="flex flex-col md:flex-row gap-10 items-center justify-center  mx-auto md:items-start">
          <div class="header flex flex-col md:items-start md:max-w-md">
              <div class=" mb-8 flex flex-col items-center">
                  <h2 class=" text-5xl lg:text-7xl font-serif font-extrabold text-yellow-500 mt-4">
                    Ways2Give
                  </h2>
                  <h3 class="mt-2 font-bold text-md md:text-lg text-gray-500">
                    Support Live streaming made easy
                  </h3>
              </div>
              <h2 class="text-center md:text-left text-xl md:text-3xl font-serif font-bold text-turkis ">
                Halo,Selamat datang
              </h2>
              <p class="text-center md:text-left text-gray-400 font-medium mt-2">
                Way2give adalah sebuah platform yang membantu streamer mendapatkan dukungan dari penonton live streaming dengan mudah.
              </p>
              <div class="buttonWrapper mt-8 md:mt-8 flex flex-col w-3/4 mx-auto md:mx-0 md:flex-row gap-12 md:gap-8">
                <button class="md:w-1/2 rounded max-w-lg py-2 px-5 focus:outline-none focus:bg-yellow-600 bg-yellow-500 text-lg text-white font-semibold shadow-lg transform hover:-translate-y-1 ease-in-out duration-300 " >
                 <a href="#login-modal">Login</a> 
                </button>
                <button class="md:w-1/2 rounded max-w-lg py-2 px-5 focus:outline-none focus:bg-yellow-600 bg-turkis text-lg text-white font-semibold shadow-lg transform hover:-translate-y-1 ease-in-out duration-300 ">
                 <a href="#login-modal">Daftar</a> 
                </button>
              </div>
          </div>

          <div class="relative pb-12">
        <img class="p-4 w-md max-w-lg" src="../assets/blob_man.png" alt="">
        <transition 
        appear 
        name="card-2"
        >
        <img class="inset-y-2/3 inset-x-56 absolute" src="../assets/card_turkis.png">
        </transition>

        <transition appear name="card-1">
          <img class="inset-y-1/2 inset-x-12 absolute" src="../assets/card_green.png">
        </transition>

        <transition appear name="card-3">
           <img class="inset-y-3/4 inset-x-28 absolute" src="../assets/card_yellow.png">
        </transition>
      </div>

        </div>
        <div id="login-modal" class="flex justify-center">
              <div
                class="px-3 py-5 border-2 bg-white border-gray-500 mt-8 md:mt-0 shadow-2xl max-w-lg"
                v-if="showLogin">
                <h2 class="font-bold text-2xl text-center text-yellow-500">Login</h2>
                <LoginForm @login="enterChat" />
                <p class="text-md font-dmmono text-gray-800 mt-8 text-center">
                  Belum punya akun?
                  <span class="cursor-pointer italic font-bold  text-turkis" @click="showLogin = false" >
                    Daftar </span> gratis disini
                </p>
              </div>
              <div
                class="px-3 py-5 border-4 bg-white border-gray-600 mt-8 shadow-2xl mx-auto"
                v-else
              >
                <h2 class="font-semibold text-2xl text-yellow-500">Daftar</h2>
                <SignupForm @signup="enterChat" />
                <p class="text-md font-dmmono text-gray-800 mt-8">
                  Sudah punya akun?
                  <span
                    class="cursor-pointer italic font-bold text-yellow-700"
                    @click="showLogin = true"
                  >
                    Login </span>disini
                </p>
              </div>  

        </div>
      </div>
    
      
  </div>
      <Footer />
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Navbar, SignupForm, LoginForm, Footer },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
  
    const enterChat = () => {
      router.push({ name: "Home" });
    };
    return { showLogin, enterChat };
  },
};
</script>

<style scoped>

    .card-2-enter-from {
      opacity: 0;
      transform: translateY(100px)
    }
    .card-2-enter-to {
      opacity: 1;
      transform: translateY(0)
    }
    .card-2-enter-active {
      transition : all 2s ease;
    }

    .card-1-enter-from {
      opacity: 0;
      transform: translateY(60px)
    }
    .card-1-enter-to {
      opacity: 1;
      transform: translateY(0)
    }
    .card-1-enter-active {
      transition : all 3s ease;
    }

    .card-3-enter-from {
      opacity: 0;
      transform: translateY(150px)
    }
    .card-3-enter-to {
      opacity: 1;
      transform: translateY(0)
    }
    .card-3-enter-active {
      transition : all 3s ease;
    }
    

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
