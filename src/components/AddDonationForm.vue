<template>
  <form @submit.prevent="handleSubmit">

    <div class="border-4 border-gray-300 pt-4 pb-4 px-4 bg-gray-400">
      <div class="flex flex-col sm:flex-row sm:flex justify-around my-3">
        <div
          class="
            mt-2
            md:mt-0
            w-1/3
            mx-2
            bg-yellow-500
            border-2
            shadow-sm
            border-gray-600
            text-xl
            

            font-bold
            focus:ring-2 focus:ring-yellow-700
            py-2
            px-3
          "
        >
          10.000
        </div>
        <div
          class="

            py-2
            px-3
            mt-2
            md:mt-0
            w-1/3
            mx-2
            bg-yellow-500
            border-2
            shadow-sm
            border-gray-600
            text-xl
            font-bold
            focus:ring-2 focus:ring-yellow-700

          "
        >
          50.000
        </div>
        <div
          class="
            py-2
            px-3
            mt-2
            md:mt-0
            w-1/3
            mx-2
            bg-yellow-500
            border-2
            shadow-sm
            border-gray-600
            text-xl
            font-bold
            focus:ring-2 focus:ring-yellow-700
          "
        >
          100.000
        </div>
      </div>

      <input
        class="
          p-2
          border-2 border-gray-200
          text-xl
          font-bold
          mt-2
          focus:ring-2 focus:ring-yellow-700
        "
        type="number"
        required
        placeholder="0 IDR"
        v-model="displayName"
      />
    </div>

    <div class="mt-8 border-4 border-gray-300 p-4">
      <input
        class="
          border-2 border-gray-200

          text-md
          font-bold
          mt-4
          focus:
          outline-none
          focus:ring-2 focus:ring-yellow-700
          py-2
          px-3
        "
        type="text"
        required
        placeholder="Nama"
        v-model="displayName"
      />

      <input
        class="
          border-2 border-gray-200

          text-md
          font-bold
          mt-4
          focus:
          outline-none
          focus:ring-2 focus:ring-yellow-700
          py-2
          px-3
        "
        type="email"
        required
        placeholder="Email"
        v-model="email"
      />
      <div class="mt-6">
        <p class="text-left pl-3 text-md font-bold mt-3 text-gray-400">Pesan</p>
        <textarea
          class="
            border-4 border-gray-300
            text-xl
            font-bold
            mt-3
            focus:
            outline-none
            focus:ring-2 focus:ring-yellow-700
            py-2
            px-3
          "
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>

    <!-- /pilih payment gateway -->

    <div
      class="
        flex flex-col
        md:flex-row
        md:items-center
        justify-around
        items-baseline
        mt-6
        border-4 border-gray-300
        p-2
      "
    >
      <div class="p-2">
        <img class="h-6 mb-3" src="../assets/Logo_ovo_purple.svg" alt="ovo" />
        <input type="radio" name="paymentGateway" id="ovo" />
      </div>
      <div class="p-2">
        <img class="h-6 mb-3" src="../assets/Gopay_logo-1.svg" alt="gopay" />
        <input type="radio" name="paymentGateway" id="gopay" />
      </div>
      <div class="p-2">
        <img class="h-6 mb-3" src="../assets/Logo_dana_blue.svg" alt="dana" />
        <input type="radio" name="paymentGateway" id="dana" />
      </div>
    </div>

    <div class="error">{{ error }}</div>
    <button
      class="
        mt-12
        w-full
        max-w-lg
        py-2
        px-3
        focus:outline-none
        focus:bg-yellow-800
        rounded-none
        bg-yellow-600
        text-lg
        font-semibold
        shadow-lg
        transform
        hover:-translate-y-1
        ease-in-out
        duration-700
      "
    >
      Kirim
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
// import useSignup from "../composables/useSignup"

export default {
  // setup(props, context) {
  //     const { error, signup } = useSignup()
  //     //refs
  //    const displayName = ref('')
  //    const email = ref('')
  //    const password = ref('')
  //    const handleSubmit = async () => {
  //     await signup(email.value, password.value, displayName.value)
  //     if (!error.value) {
  //         context.emit('signup')
  //    }
  //    }
  //    return { displayName, email, password, handleSubmit, error}
  // }
};
</script>

<style>
/* input {
  border-bottom-style: hidden;

}

.no-outline:focus {
  outline: none;
} */
</style>
