import * as firebase from 'firebase/app';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
// Add the Firebase products that you want to use



console.log(firebase.auth);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaNlut6o6bNTLpyLXOVnPGhxdEXz3_ljg",
  authDomain: "helping-hand-a7e07.firebaseapp.com",
  projectId: "helping-hand-a7e07",
  storageBucket: "helping-hand-a7e07.appspot.com",
  messagingSenderId: "569751188411",
  appId: "1:569751188411:web:da06d43d3bfa036726ca9e",
  measurementId: "G-R8PPKT1P8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

export { auth }