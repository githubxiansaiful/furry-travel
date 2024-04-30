// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe8r2920ipWEk2qvfc7-W6dGlaS4x6Nxc",
  authDomain: "real-estate-443f6.firebaseapp.com",
  projectId: "real-estate-443f6",
  storageBucket: "real-estate-443f6.appspot.com",
  messagingSenderId: "1078473248470",
  appId: "1:1078473248470:web:2b1a501c2ff01c11dfc377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;