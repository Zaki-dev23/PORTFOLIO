// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvPCKUNTREauGIy9kfHp3X2bBpWOqZGu0",
  authDomain: "portfolio3-31de5.firebaseapp.com",
  projectId: "portfolio3-31de5",
  storageBucket: "portfolio3-31de5.firebasestorage.app",
  messagingSenderId: "518978378553",
  appId: "1:518978378553:web:025e951fd96b253af8e6e8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)