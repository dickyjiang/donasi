<template>
  <div class="welcome mx-auto lg:w-2/4 md:w-3/4 mt-10 mb-20 px-4 text-center">
    <p class="text-center text-2xl md:text-4xl font-serif font-bold text-gray-800">
      Masukan Donasi
      <span class="text-sm md:text-lg">
        <!-- {{ $route.params.id }} -->
        {{ $route.params.nama }}
      </span>
    </p>
    <div class="p-2 border-4 bg-white border-gray-800 mt-8 shadow-2xl">
      <form @submit.prevent="handleSubmit">
        <div class=" pt-4 pb-4 px-4 bg-gray-300">
          <div class="w-full flex flex-col md:flex-row justify-between gap-2 my-3 items-center">
            <div class="py-2 px-3 w-full md:w-1/3  bg-yellow-500 border-2 shadow-sm border-gray-600 text-xl font-bold focus:ring-2 focus:ring-yellow-700  ">
              10.000
            </div>
            <div class=" py-2 px-3  w-full md:w-1/3  bg-yellow-500 border-2 shadow-sm border-gray-600 text-xl font-bold focus:ring-2 focus:ring-yellow-700 ">
              50.000
            </div>
            <div class=" py-2 px-3  w-full md:w-1/3  bg-yellow-500 border-2 shadow-sm border-gray-600 text-xl font-bold focus:ring-2 focus:ring-yellow-700 ">
              100.000
            </div>

          </div>
          <input
            class=" p-2 border-2 border-gray-200 text-xl font-bold mt-2 focus:ring-2 focus:ring-yellow-700 "
            type="number"
            required
            placeholder="0 IDR"
            v-model="amount"
          />
        </div>

        <div class="mt-8 border-4 border-gray-300 p-4">
          <input
            class=" border-2 border-gray-200 text-md font-bold mt-4 focus: outline-none focus:ring-2 focus:ring-yellow-700 py-2 px-3 "
            type="text"
            required
            placeholder="Nama"
            v-model="displayName"
          />

          <div class="mt-6">
            <p class="text-left pl-3 text-md font-bold mt-3 text-gray-400">Pesan</p>
            <textarea
              class=" border-4 border-gray-300 text-xl font-bold mt-3 focus: outline-none focus:ring-2 focus:ring-yellow-700 py-2 px-3 "
              v-model="pesan"
            ></textarea>
          </div>
        </div>

        <!-- /pilih payment gateway -->

        <div class=" flex flex-col md:flex-row md:items-center justify-around items-baseline mt-6 border-4 border-gray-300 p-2 ">
          <div class="p-2">
            <img
              class="h-6 mb-3"
              src="../assets/Logo_ovo_purple.svg"
              alt="ovo"
            />
            <input
              type="radio"
              name="paymentGateway"
              id="ovo"
            />
          </div>
          <div class="p-2">
            <img
              class="h-6 mb-3"
              src="../assets/Gopay_logo-1.svg"
              alt="gopay"
            />
            <input
              type="radio"
              name="paymentGateway"
              id="gopay"
            />
          </div>
          <div class="p-2">
            <img
              class="h-6 mb-3"
              src="../assets/Logo_dana_blue.svg"
              alt="dana"
            />
            <input
              type="radio"
              name="paymentGateway"
              id="dana"
            />
          </div>
        </div>

        <!-- <div class="error">{{ error }}</div> -->
        <button class=" mt-12 w-full max-w-lg py-2 px-3 focus:outline-none focus:bg-yellow-800 rounded-none bg-yellow-600 text-lg font-semibold shadow-lg transform hover:-translate-y-1 ease-in-out duration-700 ">
          Kirim
        </button>
      </form>
    </div>
  </div>
  <Footer />
</template>

<script>
import { useRoute } from "vue-router";
import { timestamp } from "../firebase/config";
import { projectFirestore } from "../firebase/config";
import Footer from '../components/Footer.vue'

export default {
  components :  {Footer},

  data() {
    return {
      displayName: "",
      pesan: "",
      amount: "",
    };
  },

  methods: {
    async handleSubmit() {
      let donation = {
        displayName: this.displayName,
        amount: this.amount,
        pesan: this.pesan,
        createdAt: timestamp(),
      };

      try {
        const res = await projectFirestore.collection("donasi").add(donation);
        console.log(res.docs);
        this.$router.push({
          name: "display",
          query: { rp: donation.amount, kepada: donation.displayName },
        });
      } catch (err) {
        console.log({ err });
      }
    },
  },
  props: ["id", "nama"],
  setup() {
    const route = useRoute();
    console.log(route.params.id);
  },
};
</script>
