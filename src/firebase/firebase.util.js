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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) 
    return

  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    } catch (err) {
      console.log(`error creating user: ${err.message}`)
    }
  }

  return userRef
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