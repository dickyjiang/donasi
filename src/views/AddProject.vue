<template>
  <form @submit.prevent="handleSubmit">
    <label>Nama:</label>
    <input type="text" v-model="displayName" required />
    <label>Jumlah:</label>
    <input type="text" v-model="amount" required />
    <label>Pesan:</label>
    <textarea v-model="pesan"></textarea>
    <button>add Project</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'

export default {
  data() {
    return {
      displayName: '',
      amount: '',
      pesan: '',
    }
  },
  methods: {
    handleSubmit() {
        let donation = {
          displayName:  this.displayName,
          amount: this.amount,
          pesan: this.pesan,
          
        }

        fetch('http://localhost:3000/donations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(donation)
        }).then(() => {
          this.$router.push('/home')
        }).catch((err) => console.log(err)) 
    }
    // handleSubmit() {
    //   const { user } = getUser()
    //   const { addDoc, error } = useCollection('messages1')
    //   const message = ref('')
    //   const chat = {
    //     title: this.title,
    //     details: this.details,
    //     complete: false,
    //     uid: user.value.uid,
    //     createdAt: timestamp(),
    //   }
    //   addDoc(chat).then(() => {
    //     this.$router.push('/Home')
    //   })
    //   if (!error.value) {
    //     message.value = ''
    //   }
    // },
  },
}
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>