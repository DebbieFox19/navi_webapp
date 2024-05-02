// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIf55Zo5SiXvHsm2YGKEixFqRYKYfVuqU",
  authDomain: "navi-6711f.firebaseapp.com",
  projectId: "navi-6711f",
  storageBucket: "navi-6711f.appspot.com",
  messagingSenderId: "978553352717",
  appId: "1:978553352717:web:2d429d7531ea8e33bc1b44",
  measurementId: "G-50DL7Z5V30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;