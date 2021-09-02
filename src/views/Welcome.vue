<template>
  <div>
    <Navbar />
  </div>
  <div
    class=" welcome mx-auto max-w-5xl px-4 pb-10 pt-8 flex min-h-screen"
  >
    <p class="text-2xl lg:text-4xl font-serif font-bold text-gray-800 flex-1 ">
      Selamat Datang
    </p>
    <div
      class="px-3 py-5 border-4 bg-white border-gray-600  shadow-2xl"
      v-if="showLogin"
    >
      <h2 class="font-bold text-2xl text-yellow-500">Login</h2>
      <LoginForm @login="enterChat" />
      <p class="text-md font-dmmono text-gray-800 mt-8 text-center">
        Belum punya akun?
        <span
          class="cursor-pointer italic font-bold text-yellow-700"
          @click="showLogin = false"
        >
          Daftar </span
        >disini
      </p>
    </div>
    <div
      class="px-3 py-5 border-4 bg-white border-gray-600 mt-8 shadow-2xl"
      v-else
    >
      <h2 class="font-semibold text-2xl text-yellow-500">Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p class="text-md font-dmmono text-gray-800 mt-8">
        Sudah punya akun?
        <span
          class="cursor-pointer italic font-bold text-yellow-700"
          @click="showLogin = true"
        >
          Login </span
        >disini
      </p>
    </div>
  </div>
  <div class="flex bg-green-600 h-screen">
    <div class="bg-black w-1/2"></div>
    <div class="p-4 w-1/2">
      <h1 class="font-serif text-3xl font-bold">Selamat Datang</h1>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar, SignupForm, LoginForm },
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
