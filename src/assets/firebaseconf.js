import firebase from "firebase"
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_xXoqwpltNkwPsTufU0kkfTgINw47_YI",
    authDomain: "apf2021-online.firebaseapp.com",
    projectId: "apf2021-online",
    storageBucket: "apf2021-online.appspot.com",
    messagingSenderId: "418672401289",
    appId: "1:418672401289:web:cb85629ebe5eb2b5b7df58"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);