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

  <div class="Home mt-10 mb-20 px-2 w-full md:max-w-screen-md mx-auto">
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
import { projectFirestore } from "../firebase/config";

export default {
  name: "Home",
  components: { Navbar, SingleDonationReportCard, Footer },
  data() {
    return {
      donations: [],
    };
  },

  async mounted() {
    await this.getDonations();
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

    async getDonations() {
      try {
        const res = await projectFirestore
          .collection("donasi")
          .orderBy("createdAt", "desc")
          .get();
        console.log(res.docs);

        this.donations = res.docs.map((doc) => {
          // console.log(doc.data())
          return { ...doc.data(), id: doc.id };
        });
      } catch (err) {
        console.log({ err });
        // error.value = err.message
      }
    },
  },

  // async mounted() {
  //   const { user } = getUser();
  //   const { error, documents } = getCollection("messages1", user._value.uid);
  //   this.projects = documents;
  // },
  // methods: {
  //   handleDelete(id) {
  //     this.projects = this.projects.filter((project) => {
  //       return project.id !== id;
  //     });
  //   },
  //   handleComplete(id) {
  //     let p = this.projects.find((project) => {
  //       return project.id == id;
  //     });
  //     p.complete = !p.complete;
  //   },
  // },
};
</script>

<style>
</style>