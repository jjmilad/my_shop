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
  apiKey: "AIzaSyAZIsQgMOqnrtccVK1Xo4lAKmqhaHQfeSc",
  authDomain: "shop-management-51293.firebaseapp.com",
  projectId: "shop-management-51293",
  storageBucket: "shop-management-51293.appspot.com",
  messagingSenderId: "198306486733",
  appId: "1:198306486733:web:d68ecf8e1af762e18f0c84",
  measurementId: "G-ZTNWSVXENT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
//const analytics = getAnalytics(app);

export { app, auth, firestore }