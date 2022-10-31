import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC69_1yyVfddfUnBSy-GIomPLIJm5hdTlc",
  authDomain: "dermapp-8cbf8.firebaseapp.com",
  projectId: "dermapp-8cbf8",
  storageBucket: "dermapp-8cbf8.appspot.com",
  messagingSenderId: "133523622514",
  appId: "1:133523622514:web:c166cb19f924ca9f2110eb",
  measurementId: "G-DNT1SK4EBF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
