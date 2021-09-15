<template>
  <Navbar />

  <div class="flex gap-4 mt-10 items-stretch justify-center mx-auto max-w-xl px-4">
    <div class=" w-1/2  tracking-tight py-1 px-3 text-center text-turkis focus:outline-none focus:bg-yellow-600 bg-white rounded border-2 border-turkis shadow-lg transform hover:-translate-y-1 ease-in-out duration-300 " >
      <h2 class="text-lg font-semibold">Total Dukungan</h2>
      <div class="flex justify-center gap-4 items-baseline">
        <p class="font-semibold">IDR</p>
        <h2 class="text-3xl font-bold mt-2">0.00</h2>
      </div>
    </div>
    <div class="w-1/2  py-1 px-3 text-center text-turkis focus:outline-none focus:bg-yellow-600 bg-white rounded border-2 border-turkis shadow-lg transform hover:-translate-y-1 ease-in-out duration-300 hover:bg-turkis hover:text-white">
      <div>
        <h2 class="font-semibold  text-lg tracking-tight"> Saldo</h2>
      </div>
      <div class="flex justify-center gap-4 items-baseline">
        <p class="font-semibold ">IDR</p>
        <h2 class="text-3xl font-bold mt-2">0.00</h2>
      </div>
    </div>
  </div>


  <div class="Home mt-10 mb-20 px-2 w-full md:max-w-screen-md mx-auto min-h-screen overflow-x-hidden overflow-y-auto">
    <div v-if="donations.length">
      <div
        v-for="donation in donations"
        :key="donation.id"
      >
        <SingleDonationReportCard
          :donation="donation"
          @delete="handleDelete"
        />
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { watch } from "vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import SingleDonationReportCard from "../components/SingleDonationReportCard.vue";
import getDonations from "../composables/getDonations";

export default {
  name: "Home",
  components: { Navbar, SingleDonationReportCard, Footer },
  data() {
    return {
      donations: [],
    };
  },

  async mounted() {
    const { user } = getUser();
    const { error, documents } = getDonations("donasi", user.value.uid);
    this.donations = documents;
  },

  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        console.log("gak ada user, kudu na ka welcome");
        router.push({ name: "Welcome" });
      } else {
        console.log("naha ka dieu");
      }
    });
  },

  methods: {
    handleDelete(id) {
      this.donations = this.donations.filter((donation) => {
        return donation.id !== id;
      });
    },
    handleComplete(id) {
      let p = this.donations.find((donation) => {
        return donation.id == id;
      });
      p.complete = !p.complete;
    },
  },
};
</script>

<style>
</style>