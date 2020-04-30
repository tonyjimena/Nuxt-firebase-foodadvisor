import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""

  }

  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

export { db, firebase }

