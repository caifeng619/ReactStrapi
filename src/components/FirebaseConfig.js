import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmnfNbYOdZADPJW7-Sk4pfUv8uIXrdrEI",
    authDomain: "dinatander-21a6c.firebaseapp.com",
    databaseURL: "https://dinatander-21a6c.firebaseio.com",
    projectId: "dinatander-21a6c",
    storageBucket: "dinatander-21a6c.appspot.com",
    messagingSenderId: "1061322501532",
    appId: "1:1061322501532:web:151aea5f6d40dd3938ec59",
    measurementId: "G-5Q93QHB64N"
  };
  
firebase.initializeApp(firebaseConfig)
// firebase.firestore().settings({timestampsInSnapshots:true});

export const googleProvider = new firebase.auth.GithubAuthProvider();

export const auth= firebase.auth();

export default firebase;