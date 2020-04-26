import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyChG5I3FYs4ZPWMJk8sbmeVaUne_yEq388",
    authDomain: "foodadvisor-9790e.firebaseapp.com",
    databaseURL: "https://foodadvisor-9790e.firebaseio.com",
    projectId: "foodadvisor-9790e",
    storageBucket: "foodadvisor-9790e.appspot.com",
    messagingSenderId: "434079795585",
    appId: "1:434079795585:web:ef02b9cebc434283d78080"

  }

  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

export { db, firebase }

