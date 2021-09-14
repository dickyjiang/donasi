<template>
  <Navbar />

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