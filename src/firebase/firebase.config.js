// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWjleUwwagkg-9rl17OCi4XwTm4MIG3Hc",
  authDomain: "tcar-world.firebaseapp.com",
  projectId: "tcar-world",
  storageBucket: "tcar-world.appspot.com",
  messagingSenderId: "1022617508614",
  appId: "1:1022617508614:web:d8bba01c5b77c8db835c87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app