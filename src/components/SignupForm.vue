<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'

export default {
  setup(props, context) {
    const { error, signup } = useSignup()

    //refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      let aaa = await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        const { addDoc, error } = useCollection('user')
        const chat = {
          uid: aaa.user.uid,
          saldo: 0,
          createdAt: timestamp(),
        }
        addDoc(chat)
        context.emit('signup')
      }
    }
    return { displayName, email, password, handleSubmit, error }
  },
}
</script>

<style>
</style>