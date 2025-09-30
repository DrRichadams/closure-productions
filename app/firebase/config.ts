// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSA_nmv-4n0nd4_vGjhKIJ5UdFpS4nXbI",
  authDomain: "closure-productions.firebaseapp.com",
  projectId: "closure-productions",
  storageBucket: "closure-productions.firebasestorage.app",
  messagingSenderId: "333500429935",
  appId: "1:333500429935:web:f07b9b5ac76d639740ff9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
