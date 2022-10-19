// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUEqv17Wc2KzcNagBqEdDhTalHgjds62o",
  authDomain: "react-resturant-8f9a8.firebaseapp.com",
  projectId: "react-resturant-8f9a8",
  storageBucket: "react-resturant-8f9a8.appspot.com",
  messagingSenderId: "565109093064",
  appId: "1:565109093064:web:c86ec35c6b7b916ecfebfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app