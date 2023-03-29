// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0YD26PYW5ncB9YtxEieVBQEcMI5DmEYo",
  authDomain: "smart-car-services-818d7.firebaseapp.com",
  projectId: "smart-car-services-818d7",
  storageBucket: "smart-car-services-818d7.appspot.com",
  messagingSenderId: "1014323447079",
  appId: "1:1014323447079:web:baf2c1ca561c3a1d02d502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;