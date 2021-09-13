<template>
  <!-- <h3>User Profile ID {{ id }}</h3> -->
  <div v-if="error">{{ error }}</div>
  <div class=" mt-8  py-4 flex flex-col gap-4 justify-between items-center border rounded shadow-xl mx-4  " v-if="profile">

    <!-- user profile info -->
    <div>
      <img class="w-32 h-32 rounded-full border-2 border-turkis " :src="profile.avatarUrl" >
    </div>
    <h2 class="text-2xl font-bold ">{{profile.profileName}}</h2>
    <p class="text-xl fonts-bold">{{profile.description}}</p>

    <button v-if="ownership"> Delete Profile </button>

    <h2>

    </h2>
  </div>


<!-- untuk showing list -->
  <!-- <div v-if="error">Could not fetch data</div>
  <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">{{doc.profileName}}</div>
  </div> -->

</template>

<script>
import getCollection from '../composables/getCollection'
import getUserProfile from '../composables/getUserProfile'
import getUser from '../composables/getUser'
import { computed } from 'vue'


export default {
    props: ["id", "nama", "profiles"],
    
    setup(props){
      const { error, document: profile } = getUserProfile('profiles', props.id)
      const { user } = getUser()

      const ownership = computed(() => {
        return profile.value && user.value && user.value.uid == profile.value.userId
      })

      return { error, profile, ownership }
    }


    // untuk shoawing list
    // setup() {
    //     const { error, documents } = getCollection('profiles')

    //     return { error, documents }

    // }

}
</script>

<style>

</style>