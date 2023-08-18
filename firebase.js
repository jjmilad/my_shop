// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcS1WV-PkZ7RaoY1ev51nRPZOn7Qyr1NE",
  authDomain: "shop2-6a7b8.firebaseapp.com",
  projectId: "shop2-6a7b8",
  storageBucket: "shop2-6a7b8.appspot.com",
  messagingSenderId: "259960581601",
  appId: "1:259960581601:web:67cf2abd3d8f5b139876a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
//const analytics = getAnalytics(app);

export { app, auth, firestore }