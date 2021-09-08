<template>
  <div class="flex justify-between rounded shadow-xl mx-auto bg-yellow-400 p-3 my-5">
      <p class="" > <span class="">tgl</span> {{ donation.createdAt}}</p>
      <p class="" > <span class="">IDR</span> {{ donation.amount }}</p>
      <p class="" @click="showDetails = !showDetails">{{ donation.pesan }}</p>
          <h1 class="">{{ donation.displayName }}</h1>
        <button @click="deleteDonation">
          delete
        </button>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config' 

export default {
  props: ["donation"],
  data() {
    return {
      // showDetails: false,
      // uri: "http://localhost:3000/donations/" + this.donation.id,
    };
  },
  methods: {
    async deleteDonation() {
      try {
        await projectFirestore.collection('donasi').doc(this.donation.id).delete();
        this.$emit("delete", this.donation.id);
      }
      catch(err) {
        console.log({err})
      }
    },

  },
  let createdAt = { seconds: 1549843200, nanoseconds: 0 }, // firebase data     
  let myDate = new Date(timestamp.seconds * 1000), // date object
  console.log(myDate)
};
</script>

<style>

</style>
