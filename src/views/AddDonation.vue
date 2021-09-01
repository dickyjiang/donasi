<template>
  <div class="welcome mx-auto lg:w-2/4 md:w-3/4 mt-4 text-center">
    <p class="text-center text-4xl lg:text-4xl font-serif font-bold text-gray-800">
      Masukan Donasi {{ $route.params.id }}
    </p>
    <div class="p-2 border-4 bg-white border-gray-800 mt-8 shadow-2xl">
      <!-- <h2 class="font-semibold text-2xl text-yellow-700 ">Masukan Donasi anda</h2> -->
      <addDonationForm />
    </div>
    <!-- <div class="p-10 border-4 bg-white border-gray-800 mt-12 shadow-2xl" v-else>
      <h2 class="font-semibold text-2xl text-yellow-700 ">Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p class="text-md font-dmmono text-gray-800 mt-8">
        Already have an account?
        <span
          class="cursor-pointer italic font-bold text-yellow-700"
          @click="showLogin = true"
        >
          Login </span
        >instead
      </p>
    </div> -->
  </div>
</template>

<script>
import AddDonationForm from "../components/AddDonationForm.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";

export default {
  props: ["id"],
  setup() {
    const route = useRoute();
    console.log("aaaa");
    console.log(route.params.id);
  },
  components: { Navbar, AddDonationForm },
  //   setup() {
  //     const showLogin = ref(true);
  //     const router = useRouter();

  //     const enterChat = () => {
  //       router.push({ name: "Home" });
  //     };

  //     return { showLogin, enterChat };
  //   },
};
</script>

<style></style>
