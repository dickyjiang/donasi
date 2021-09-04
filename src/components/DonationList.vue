<template>
  <div>
    <div v-for="donation in donations" :key="donation.id">
      <h3>{{donation.displayName}}</h3>
      <h3>{{donation.amount}}</h3>
      <h3>{{donation.pesan}}</h3>

    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'

import SingleDonation from './SingleDonation.vue'

export default {
    props: ['donations'],
    components: { },
    setup() {
        
    }

}
</script>

<style>

</style>