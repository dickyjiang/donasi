<template>
  <form @submit.prevent="handleSubmit">
    <input class="border-1 border-turkis mt-3 text-lg font-medium focus: outline-none focus:ring-2 focus:ring-turkis focus:border-0 py-2 px-3"
      type="text"
      required
      placeholder="Nama"
      v-model="displayName"
    />
    <input
      class="border-1 border-turkis mt-3 text-lg font-medium focus: outline-none focus:ring-2 focus:ring-turkis focus:border-0 py-2 px-3"
      type="email"
      required
      placeholder="email"
      v-model="email"
    />
    <input
      class="border-1 border-turkis mt-3 text-lg font-medium focus: outline-none focus:ring-2 focus:ring-turkis focus:border-0 py-2 px-3"
      type="password"
      required
      placeholder="password"
      v-model="password"
    />
    <div class="error">{{ error }}</div>
    <button
      class="
        mt-12
        w-3/4
        rounded
        max-w-lg
        py-2
        px-3
        focus:outline-none
        focus:bg-turkis-dark
        bg-turkis
        text-lg
        font-semibold
        shadow-lg
        transform
        hover:-translate-y-1
        ease-in-out
        duration-300
      "
    >
      Daftar
    </button>
  </form>
</template>

<script>

import { ref } from "vue";
import useSignup from "../composables/useSignup";

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("signup");
      }
    };
    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>


