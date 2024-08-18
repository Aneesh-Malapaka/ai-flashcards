// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "flashcard-ai-saas.firebaseapp.com",
  projectId: "flashcard-ai-saas",
  storageBucket: "flashcard-ai-saas.appspot.com",
  messagingSenderId: "446925778004",
  appId: "1:446925778004:web:48c066f706665b0a40d1c1",
  measurementId: "G-QMCS4SSBRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app);
const auth = getAuth(app)
export { firestore,storage, auth }