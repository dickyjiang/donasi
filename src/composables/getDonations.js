import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDonations = () => {

  const donations = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let res = await projectFirestore.collection('donation').doc(id).get()
      if(!res.exists) {
        throw Error('no available data')
      }
      donations.value = { ...res.data(), id: res.id}
      console.log(donations.value);
      // donations.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { donations, error, load }
}

export default getDonations