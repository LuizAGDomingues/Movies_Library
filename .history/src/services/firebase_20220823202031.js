// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { a } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcJwPjEDZlu6VWAyKOxP0DMjIstzxh35A",
  authDomain: "movie-lib-auth.firebaseapp.com",
  projectId: "movie-lib-auth",
  storageBucket: "movie-lib-auth.appspot.com",
  messagingSenderId: "739635172175",
  appId: "1:739635172175:web:faf4245f25f3e61bcceb3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);