<template>
  <div class="flex flex-col justify-between items-center mx-auto w-full max-w-md border-2 mt-8 " >
      <form class="flex flex-col w-full items-center" @submit.prevent="handleSubmit">
        <h2 class="text-2xl font-bold ">Create Profile</h2>
        <div class="mt-8">
          <label class="text-left">
            Nama
          </label>
          <input class="" type="text" required placeholder="Nama yang akan ditampilkan" v-model="profileName">
          <textarea class="mt-12" placeholder="Mengenai anda ..." v-model="description"></textarea>
          <div class="mt-4">
            <label  class="mx-auto text-center bg-turkis text-white py-3 px-5 rounded">
                <input class="hidden" type="file" @change="handleChange"> upload profile picture
            </label>
            <div> {{fileError}}</div>
          </div>
          <button v-if="!isPending" class="mt-12 w-full rounded max-w-lg py-2 px-5 focus:outline-none focus:bg-yellow-600 bg-yellow-500 text-lg text-white font-semibold shadow-lg transform hover:-translate-y-1 ease-in-out duration-300 ">Save Profile</button>
          <button v-else disabled class="mt-12 w-full rounded max-w-lg py-2 px-5 focus:outline-none focus:bg-yellow-600 bg-yellow-500 text-lg text-white font-semibold shadow-lg transform hover:-translate-y-1 ease-in-out duration-300 ">Uploading ...</button>
        </div>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useStorage  from '../composables/useStorage'
import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import { useRouter } from 'vue-router'


export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage()
    const { error, addDoc } = useCollection('profiles')
    const { user } = getUser()
    const router = useRouter()

    const profileName = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)
    const isPending = ref(false)

    const handleSubmit = async () => {
      if (file.value){
        isPending.value = true
        await uploadImage(file.value)
        const res = await addDoc ({
          profileName: profileName.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          avatarUrl: url.value,
          filePath: filePath.value,
          createdAt: timestamp()

        })
        isPending.value = false

        if (!error.value) {
          router.push({ name: 'UserProfile', params: { id: res.id }})
        }

        // console.log('image uploaded, url: ',url.value)
        // console.log(profileName.value, description.value, file.value)
      }
    }

    const types = ['image/png','image/jpeg']

    const handleChange = (e) => {
      const selected = e.target.files[0]
      console.log (selected)

      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'Gunakan file png atau jpg'
        
      }


    }

    return { profileName, description, handleSubmit, handleChange, fileError, isPending}
  }

}
</script>

<style>

</style>