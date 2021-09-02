<template>
  <div v-for="donation in donations" :key="donation.id">
      <SingleDonation :donation="donation" />
  </div>
</template>

<script>
import SingleDOnation from '../components/SingleDonation.vue';
export default {
    props: ['donations'],
    components: { SingleDOnation},
    setup(){

    }

}
</script>

<style>

</style>