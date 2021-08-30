<template>
  <form @submit.prevent="handleSubmit">
    <input
      class="
        border-1
        mt-3
        text-lg
        font-semibold
        focus:
        outline-none
        focus:ring-2 focus:ring-yellow-700
        py-2
        px-3
      "
      type="email"
      required
      placeholder="email"
      v-model="email"
    />
    <input
      class="
        border-1
        mt-3
        text-lg
        font-semibold
        focus:
        outline-none
        focus:ring-2 focus:ring-yellow-700
        py-2
        px-3
      "
      type="password"
      required
      placeholder="password"
      v-model="password"
    />
    <button
      class="
        mt-12
        w-3/4
        rounded
        max-w-lg
        py-2
        px-3
        focus:outline-none
        focus:bg-yellow-800
        bg-yellow-600
        text-lg
        font-semibold
        shadow-lg
        transform
        hover:-translate-y-1
        ease-in-out
        duration-300
      "
    >
      Log in
    </button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  setup(props, context) {
    //refs
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
