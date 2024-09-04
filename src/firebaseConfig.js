import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUQ0e08C-x2tRrVF7rrUduQzl7RJjO78U",
    authDomain: "p-c7de8.firebaseapp.com",
    projectId: "p-c7de8",
    storageBucket: "p-c7de8.appspot.com",
    messagingSenderId: "491322596579",
    appId: "1:491322596579:web:fd4757611ce60c783fb9d6",
    measurementId: "G-VQPLF1YX18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

