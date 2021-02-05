import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCSEYDfGtEtfl-bGKWFLPiXdUFsaXhQK-o",
  authDomain: "online-drive-project.firebaseapp.com",
  projectId: "online-drive-project",
  storageBucket: "online-drive-project.appspot.com",
  messagingSenderId: "960733958201",
  appId: "1:960733958201:web:55b832f443b45927867de8",
  measurementId: "G-5N9H75HMMV"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db  = firebaseApp.firestore()

  export { auth, provider, db, storage } 