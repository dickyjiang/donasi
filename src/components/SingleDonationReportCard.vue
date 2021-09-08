<template>
  <div class="flex justify-between rounded shadow-xl mx-auto bg-yellow-400 p-3 my-5">
      <p class=""> {{ donation.createdAt.toDate()}}</p>
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
import { FormatDistanceToNow } from 'date-fns'
import { computed } from '@vue/reactivity';


export default {
  props: ["donation"],

  // setup(props) {
  //   let date = new Date(props.donation.createdAt);
  //   let day = date.getDate();
  //   let month = date.getMonth();
  //   let year = date.getFullYear();

  //   let formattedDate = day + "/" + month + "/" + year;

  //     return { formattedDate }
  //   },
  

  // data() {
  //   return {
  //     // showDetails: false,
  //     // uri: "http://localhost:3000/donations/" + this.donation.id,
  //   };
  // },

  //coba formated timestamp 

  // setup() {
  //   const formattedDocuments = computed(() => {
  //     if (donation.value) {
  //       return donation.value.map(donation => {
  //         let time = formatDistanceToNow(donation.createdAt.toDate())
  //         return { ...donation, createdAt: time}
  //       })
  //     }
  //   })
  //   return { formattedDocuments }
  // },



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
