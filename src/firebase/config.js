import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCeHKqekx2bZ3HLEvCabPQCgcBkaroK7R8",
  authDomain: "donasi-app-75753.firebaseapp.com",
  projectId: "donasi-app-75753",
  storageBucket: "donasi-app-75753.appspot.com",
  messagingSenderId: "592900631642",
  appId: "1:592900631642:web:b69b8297f6fb1680f73c63"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, projectStorage, timestamp, }
