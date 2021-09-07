<template>
  <div class="px-4 mt-10 mb-20">
    <h1> aaaaa {{ $route.params.rp }} {{ $router.params.kepada }}</h1>
    <div v-if="donations.length">
      <div
        v-for="donat in donations"
        :key="donat.id"
      >
        <SingleDonation
          :donation="donat"
          @delete="handleDelete"
        />
      </div>
    </div>

  </div>

</template>

<script>
import { ref } from "vue";
import SingleDonation from "../components/SingleDonation.vue";
import { projectFirestore } from "../firebase/config";

import { watch } from "vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import getCollection from "../composables/getCollection";

export default {
  name: "display",
  props: ["rp", "kepada"],
  components: { SingleDonation },
  data() {
    return {
      donations: [],
    };
  },
  async mounted() {
    await this.getDonations();

    // fetch('http://localhost:3000/donations')
    //   .then(res => res.json())
    //   .then(data => this.donations = data )
    //   .catch(err => console.log(err.message))
  },

  setup() {
    // const { user } = getUser();
    // const router = useRouter();

    // watch(user, () => {
    //   if (!user.value) {
    //     router.push({ name: "Welcome" });
    //   }
    // });
    return {};
  },
  // data() {
  //   return {
  //     donations: [],
  //   };
  // },

  // async mounted() {
  //   const { user } = getUser();
  //   const { error, documents } = getDonations("donasi", user._value.uid);
  //   this.donations = documents;
  // },
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
};
</script>

<style>
</style>