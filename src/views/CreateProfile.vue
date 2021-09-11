<template>
  <form @submit.prevent="handleSubmit">
    <h3>Create Profile</h3>
    <label>
      Nama
    </label>
    <input class="appearance-none " type="text" required placeholder="Nama yang akan ditampilkan" v-model="profileName">
    <textarea class="mt-12" placeholder="Mengenai anda ..." v-model="description"></textarea>
    <div class="mt-2">
      <label class=" w-3/4 mx-auto text-center bg-turkis text-white p-2 rounded  ">
          <input class="" type="file" @change="handleChange"> upload profile picture
      </label>
      <div> {{fileError}}</div>
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
    const file = ref(null)
    const fileError = ref(null)

    const handleSubmit = () => {
      console.log(profileName.value, description.value)
    }

    const types = ['image/png', 'image/jpg','image/jpeg']

    const handleChange = (e) => {
      const selected =  e.target.files[0]
      console.log (selected)

      if (selected && types.includes('selected.type')) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'image harus png atau jpg'
      }


    }

    return { profileName, description, handleSubmit, handleChange, fileError }
  }

}
</script>

<style>

</style>