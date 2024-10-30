// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuOxFgpWxHSMXvp26iq1iAmqDm4pPsNPY",
  authDomain: "next-app-with-firebase-4ffa3.firebaseapp.com",
  projectId: "next-app-with-firebase-4ffa3",
  storageBucket: "next-app-with-firebase-4ffa3.appspot.com",
  messagingSenderId: "417290199492",
  appId: "1:417290199492:web:213f020d3b5d5c64d2c491",
  measurementId: "G-GYNMB6DNE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};