import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/app'

const config = {
  apiKey: "AIzaSyAlg3w07pSWa9uGLIUlF_0QtzFoyOp9c88",
  authDomain: "react-ecomm-3686e.firebaseapp.com",
  projectId: "react-ecomm-3686e",
  storageBucket: "react-ecomm-3686e.appspot.com",
  messagingSenderId: "318635108970",
  appId: "1:318635108970:web:d8f9beb024cd8fd73a3813",
  measurementId: "G-8ZV003D6Q2"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase