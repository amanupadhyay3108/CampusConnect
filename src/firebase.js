// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlom6hzXYDRsMAyntnQq412IOJr7_R4vg",
  authDomain: "drowssiness-detection.firebaseapp.com",
  projectId: "drowssiness-detection",
  storageBucket: "drowssiness-detection.firebasestorage.app",
  messagingSenderId: "720048322667",
  appId: "1:720048322667:web:c318ace8067788d1b4d92e",
  measurementId: "G-K9NZFMZYT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const analytics = getAnalytics(app);
export const db = getFirestore(app);
