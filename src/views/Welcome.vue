<template>
    <!-- <div>
    <Navbar />
  </div> -->
  <div class="mb-20 px-12 pt-12 bg-white min-h-screen mx-auto">

    <div class="flex-none md:flex gap-5">
      <div class="header ">
          <h2 class="text-center md:text-left text-2xl lg:text-3xl font-serif font-bold text-turkis ">
            Halo,<br> Selamat datang di
          </h2>
          <div class="my-4">
              <h2 class="text-center md:text-left text-4xl lg:text-5xl font-serif font-extrabold text-yellow-500 text-yell mt-4">
                Way2Give
              </h2>
              <h3 class="text-center md:text-left font-bold text-lg text-gray-600">
                Support Live streaming made easy
              </h3>
          </div>
          <p class="text-center md:text-left text-gray-500 font-medium">
            Way2give adalah sebuah platform yang membantu anda mendapatkan dukungan dari penonton live streaming anda secara cepat dan mudah.
          </p>
      </div>
      <div
        class="px-3 py-5 border-4 bg-white border-gray-600 mt-8 md:mt-0 shadow-2xl max-w-lg mx-auto"
        v-if="showLogin">
        <h2 class="font-bold text-2xl text-center text-yellow-500">Login</h2>
        <LoginForm @login="enterChat" />
        <p class="text-md font-dmmono text-gray-800 mt-8 text-center">
          Belum punya akun?
          <span class="cursor-pointer italic font-bold  text-yellow-700" @click="showLogin = false" >
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
