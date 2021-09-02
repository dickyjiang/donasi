import { ref } from 'vue'

const getDonations = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts')
      if(!data.ok) {
        throw Error('no available data')
      }
      donations.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { donations, error, load }
}

export default getDonations