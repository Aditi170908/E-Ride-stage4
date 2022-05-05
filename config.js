import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDYLAHhYYAoCngc9kuvxx06ZltAYNR5HhE",
    authDomain: "e-ride-stage4-99b84.firebaseapp.com",
    projectId: "e-ride-stage4-99b84",
    storageBucket: "e-ride-stage4-99b84.appspot.com",
    messagingSenderId: "5223204852",
    appId: "1:5223204852:web:45c1d856c819a72d999ba1"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
