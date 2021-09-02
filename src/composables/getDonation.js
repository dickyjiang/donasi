import { ref } from 'vue'


const getDonation = (id) => {

  const donation = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let res = await projectFirestore.collection('donation').doc(id).get()
      if(!res.exists) {
        throw Error('no available data')
      }
      donation.value = { ...res.data(), id: res.id}
      console.log(donation.value);
      // donations.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { donation, error, load }
}

export default getDonation