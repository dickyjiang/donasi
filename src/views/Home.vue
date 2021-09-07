<template>
  <Navbar />

  <div class="Home mt-10 mb-20 px-2 w-full md:max-w-screen-md mx-auto">
    <div v-if="donations.length">
      <div
        v-for="donat in donations"
        :key="donat.id"
      >
        <SingleDonationReportCard
          :donation="donat"
          @delete="handleDelete"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { watch } from "vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import SingleDonationReportCard from "../components/SingleDonationReportCard.vue";
import { projectFirestore } from "../firebase/config";

export default {
  name: "Home",
  components: { Navbar, SingleDonationReportCard },
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