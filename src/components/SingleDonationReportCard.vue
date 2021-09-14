<template>
  <div class=" justify-between rounded shadow-xl mx-auto bg-yellow-400 p-4 py-3 my-5">
      <p class=""> {{donation.createdAt}}</p>
      <div class="flex gap-3 justify-between mt-3 items-baseline">
        <p class="text-xl font-bold" > <span class="">IDR</span> {{ donation.amount }}</p>
        <p class="font-serif text-lg font-medium" @click="showDetails = !showDetails">{{ donation.pesan }}</p>
            <h1 class="font-semibold">{{ donation.displayName }}</h1>
          <!-- <button @click="deleteDonation">
            delete
          </button> -->
      </div>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config' 
import { FormatDistanceToNow } from 'date-fns'
import { computed } from 'vue'


export default {
  props: ["donation"],
  data() {
    return {
      // showDetails: false,
      // uri: "http://localhost:3000/donations/" + this.donation.id,
    };
  },

  //coba formated timestamp 

  setup() {
    const formattedDocuments = computed(() => {
      if (donation.value) {
        return donation.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time}
        })
      }
    })
    return { formattedDocuments }
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
};
</script>

<style>

</style>
