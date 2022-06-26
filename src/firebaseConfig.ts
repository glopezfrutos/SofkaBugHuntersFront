// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ4GqU2U1PmmvoXLCASN9NM9g52TEDg1Q",
  authDomain: "sofkabughunters.firebaseapp.com",
  projectId: "sofkabughunters",
  storageBucket: "sofkabughunters.appspot.com",
  messagingSenderId: "221600874653",
  appId: "1:221600874653:web:30780831bd060d4460d474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);