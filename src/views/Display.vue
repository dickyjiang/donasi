<template>
  <div>
    <div v-if ="donations.length">
      <div v-for="donation in donations" :key="donation.id">
        <SingleDonation 
        :donation="donation" 
        @delete="handleDelete"/>
      </div>
    </div>
    
  </div>
   
</template>

<script>
import { ref } from 'vue'
import SingleDonation from '../components/SingleDonation.vue'

import { watch } from 'vue'
import {useRouter} from 'vue-router'
import getUser from '../composables/getUser'
import getCollection from '../composables/getCollection'


export default {
  name: "display",
  components: { SingleDonation },
  data() {  
      return {
          donations: []
      }
  },
  mounted() {
    fetch('http://localhost:3000/donations')
      .then(res => res.json())
      .then(data => this.donations = data )
      .catch(err => console.log(err.message))
  },



  setup() {
    // const { user } = getUser();
    // const router = useRouter();

    // watch(user, () => {
    //   if (!user.value) {
    //     router.push({ name: "Welcome" });
    //   }
    // });
    return {}
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
  },
};
</script>

<style>
</style>