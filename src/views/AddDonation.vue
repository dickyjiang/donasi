<template>
<div class="relative py-10 flex flex-col justify-center items-center bg-yellow-50">
    <!-- background image pilihan user -->
    <div class="absolute top-0 w-full">
      <img class="w-full" src="../assets/bg-profile.jpg" alt="">
      <!-- <img :src="profiles.avatarUrl"> -->
    </div>
    <div class=" relative z-99 lg:w-2/4 md:w-3/4 pt-4 mt-20 px-2 text-center bg-white shadow-2xl rounded-xl mx-8 pb-10">
      <div class="flex flex-col justify-center items-center py-2">
        <!-- user profile pic -->
        <div class="rounded-full bg-white">
          <img src="../assets/np_avatar_2309777_5E9FB0.png" alt="">
        </div>
        <h2 class="text-2xl md:text-3xl font-bold font-serif my-4">
            <!-- {{ $route.params.id }} -->
            {{ $route.params.nama }}
        </h2>
      </div>
      <div>
        <form @submit.prevent="handleSubmit">
          <div class=" pt-4 pb-4 px-4 bg-gray-200">
            <div class="w-full flex flex-col md:flex-row justify-between gap-4 my-3 items-center">
              <div class="py-2 px-3 w-full md:w-1/3  bg-yellow-500 border-2 shadow-sm border-gray-600 text-xl font-bold focus:ring-2 focus:ring-yellow-700  ">
                10.000
              </div>
              <div class=" py-2 px-3  w-full md:w-1/3  bg-green-500 border-2 shadow-sm border-gray-600 text-xl font-bold focus:ring-2 focus:ring-yellow-700 ">
                50.000
              </div>
              <div class=" py-2 px-3  w-full md:w-1/3  bg-turkis border-2 shadow-sm border-gray-600 text-xl font-bold focus:ring-2 focus:ring-yellow-700 ">
                100.000
              </div>

            </div>
            <input
              class="appearance-none form p-2  border-gray-200 text-xl font-bold mt-2 focus:ring-2 focus:ring-yellow-600 "
              type="number"
              required
              placeholder="0 IDR"
              v-model="amount"
            />
            <p class=" italic mt-4 text-sm"> Maksimal nomimal pertransaksi IDR 20.000.000</p>
          </div>

          <div class="mt-8 border-2 border-gray-300 p-4">
            <input
              class=" border-2 border-gray-200 text-md font-bold mt-4 focus: outline-none focus:ring-2 focus:ring-yellow-700 py-2 px-3 "
              type="text"
              required
              placeholder="Nama"
              v-model="displayName"
            />
            <p class="font-medium italic mt-2 text-gray-500 text-left">*opsional, jika tidak diisi, akan ditampilkan sebagai NN</p>

            <div class="mt-6">
              <p class="text-left pl-3 text-md font-bold mt-3 text-gray-400">Pesan</p>
              <textarea
                class=" border-2 border-gray-300 text-xl font-bold mt-3 focus: outline-none focus:ring-2 focus:ring-yellow-700 py-2 px-3 "
                v-model="pesan"
              ></textarea>

              <p class="font-medium italic mt-2 text-gray-500 text-left">*opsional</p>
            </div>
          </div>

          <!-- /pilih payment gateway -->

          <div class=" grid gap-4 md:flex md:flex-row md:items-center justify-around items-baseline mt-6 border-2 border-gray-300 p-2 ">
            <div class="p-2">
              <img class="h-6 mb-3" src="../assets/Logo_ovo_purple.svg" alt="ovo"/>
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
          <button class=" mt-12 w-full max-w-md py-3 px-3 focus:outline-none focus:bg-yellow-600 rounded-none bg-yellow-500 text-xl font-semibold shadow-lg transform hover:-translate-y-1 ease-in-out duration-700 ">
            Kirim
          </button>
        </form>
      </div>
    </div>
</div>
</template>

<script>
import { useRoute } from "vue-router";
import { timestamp } from "../firebase/config";
import { projectFirestore } from "../firebase/config";
import getCollection from '../composables/getCollection';

export default {

  setup() {
    const { error, documents} = getCollection('profiles')

    return { error, documents}
  },
  

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
          query: { rp: donation.amount, kepada: donation.displayName, pesan: donation.pesan },
        });
      } catch (err) {
        console.log({ err });
      }
    },
  },
  props: ["id", "nama", "profiles"],

  
  
};
</script>
