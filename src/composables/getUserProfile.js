import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'


const getUserProfile = (collection, id) => {

  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestore.collection(collection)
    .where('userId', '==', id)

  const unsub = collectionRef.onSnapshot((snap) => {
    let results = []
    snap.docs.forEach(doc => {
      doc.data().createdAt.toDate() && results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch data'
  })

  watchEffect((onInvalidate) => {
    //unsub from prev collection when watcher is stopped ( component unmount)
    onInvalidate(() => unsub())
  });

  return { document, error }


}

export default getUserProfile