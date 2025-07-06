// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA...realkey...",
  authDomain: "campusjoin.firebaseapp.com",
  projectId: "campusjoin",
  storageBucket: "campusjoin.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcd1234efgh5678"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
