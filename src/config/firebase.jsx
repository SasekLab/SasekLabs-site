// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwH_NdKET9F_O27dmKAsLGlgCBmrlIyIg",
  authDomain: "saseklabs-25dea.firebaseapp.com",
  projectId: "saseklabs-25dea",
  storageBucket: "saseklabs-25dea.firebasestorage.app",
  messagingSenderId: "729215676561",
  appId: "1:729215676561:web:b706741afe909e703f0f30",
  measurementId: "G-1QHW7V9Q52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);