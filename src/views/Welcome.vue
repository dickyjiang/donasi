<template>
    <!-- <div>
    <Navbar />
  </div> -->
  <div class="mb-20 px-12 pt-12 bg-white min-h-screen mx-auto max-w-5xl">

    <div class="flex-none md:flex gap-5 items-center md:items-start">
      <div class="header md:max-w-md">
          <h2 class="text-center md:text-left text-3xl lg:text-3xl font-serif font-bold text-turkis ">
            Halo,<br> Selamat datang di
          </h2>
          <div class="mt-8 mb-2">
              <h2 class="text-center md:text-left text-4xl lg:text-5xl font-serif font-extrabold text-yellow-500 text-yell mt-4">
                Way2Give
              </h2>
              <h3 class="text-center md:text-left font-bold text-lg text-gray-500">
                Support Live streaming made easy
              </h3>
          </div>
          <p class="text-center md:text-left text-gray-400 font-medium">
            Way2give adalah sebuah platform yang membantu anda mendapatkan dukungan dari penonton live streaming anda secara cepat dan mudah.
          </p>
          <!-- <div class="buttonWrapper mt-8 md:mt-8 flex flex-col w-3/4 mx-auto md:mx-0 md:flex-row gap-4 md:gap-8">
            <button class="md:w-1/2 rounded max-w-lg py-2 px-5 focus:outline-none focus:bg-yellow-600 bg-yellow-500 text-lg text-white font-semibold shadow-lg transform hover:-translate-y-1 ease-in-out duration-300 " >
              Login
            </button>
            <button class="md:w-1/2 rounded max-w-lg py-2 px-5 focus:outline-none focus:bg-yellow-600 bg-turkis text-lg text-white font-semibold shadow-lg transform hover:-translate-y-1 ease-in-out duration-300 ">
              Daftar
            </button>
          </div> -->
      </div>
      <div
        class="px-3 py-5 border-2 bg-white border-gray-500 mt-8 md:mt-0 shadow-2xl max-w-lg mx-auto"
        v-if="showLogin">
        <h2 class="font-bold text-2xl text-center text-yellow-500">Login</h2>
        <LoginForm @login="enterChat" />
        <p class="text-md font-dmmono text-gray-800 mt-8 text-center">
          Belum punya akun?
          <span class="cursor-pointer italic font-bold  text-turkis" @click="showLogin = false" >
            Daftar </span>disini
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
