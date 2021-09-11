<template>
  <form @submit.prevent="handleSubmit">
    <h3>Create Profile</h3>
    <label>
      Nama
    </label>
    <input class="appearance-none " type="text" required placeholder="Nama yang akan ditampilkan" v-model="profileName">
    <textarea class="mt-12" placeholder="Mengenai anda ..." v-model="description"></textarea>
    <div>
      <label>
        Profile Picture
      </label>
      <input class="appearance-none" type="file">
    </div>
    <div>
      <label>
        Background Picture
      </label>
      <input type="file">
    </div>
    <button>Save Profile</button>
  </form>
</template>

<script>
import { ref } from 'vue'


export default {
  setup() {
    const profileName = ref('')
    const description = ref('')

    const handleSubmit = () => {
      console.log(profileName.value, description.value)
    }

    return { profileName, description, handleSubmit }
  }

}
</script>

<style>

</style>