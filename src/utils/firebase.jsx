// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTc7PGrDfocM6s7BHD0igiISS0CPt9crg",
  authDomain: "netflix-gpt-s.firebaseapp.com",
  projectId: "netflix-gpt-s",
  storageBucket: "netflix-gpt-s.firebasestorage.app",
  messagingSenderId: "399433390661",
  appId: "1:399433390661:web:9ab4ae44c3c9f25520612c",
  measurementId: "G-634TRHK25E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 