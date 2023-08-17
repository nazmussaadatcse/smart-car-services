// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuzd4wRn2QRGfiNoE8cBMOCpeCzbzih7c",
  authDomain: "smart-car-service-au.firebaseapp.com",
  projectId: "smart-car-service-au",
  storageBucket: "smart-car-service-au.appspot.com",
  messagingSenderId: "1074711327485",
  appId: "1:1074711327485:web:cce889d26fdd54c8518494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app