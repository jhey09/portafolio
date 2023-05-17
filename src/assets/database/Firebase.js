import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDU8-5TlncVnebKAH5h4tcdX9wmjyqv1Dg",
  authDomain: "portafolio-877d7.firebaseapp.com",
  projectId: "portafolio-877d7",
  storageBucket: "portafolio-877d7.appspot.com",
  messagingSenderId: "217427841444",
  appId: "1:217427841444:web:f83d129f6098147a3bb131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }