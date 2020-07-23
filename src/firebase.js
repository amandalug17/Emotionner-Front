import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBoDNvkzGV1ZW_KAaS7gGEjduyr9Kfk_G8",
    authDomain: "emotionner.firebaseapp.com",
    databaseURL: "https://emotionner.firebaseio.com",
    projectId: "emotionner",
    storageBucket: "emotionner.appspot.com",
    messagingSenderId: "420879445618",
    appId: "1:420879445618:web:544a7c9f14758ef6641ceb",
    measurementId: "G-JX6X0KZMNJ"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
