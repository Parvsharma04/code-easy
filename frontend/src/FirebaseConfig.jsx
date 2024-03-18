// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACCs7gpSUSwmi7UVlfRbsaSnPJP8Z81JE",
  authDomain: "fir-auth-649eb.firebaseapp.com",
  projectId: "fir-auth-649eb",
  storageBucket: "fir-auth-649eb.appspot.com",
  messagingSenderId: "409452404475",
  appId: "1:409452404475:web:4e3a7f5bea8504eb759a5e",
  measurementId: "G-4ZPQZ2GHZQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
