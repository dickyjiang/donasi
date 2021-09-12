import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'


const getUserProfile = (collection, id) => {

  const document = ref(null)
  const error = ref(null)

  let documentRef = projectFirestore.collection(collection).doc(id)

  const unsub = documentRef.onSnapshot((doc) => {
    if(doc.data()) {
      document.value = {...doc.data(), id: doc.id}
      error.value = null
    }else {
      error.value = 'that document does not exist'
    }
    
  }, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch document'
  })

  watchEffect((onInvalidate) => {
    //unsub from prev collection when watcher is stopped ( component unmount)
    onInvalidate(() => unsub())
  });

  return { document, error }


}

export default getUserProfile