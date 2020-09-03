import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCAbzoEqwCSd7c1mqwzSmohELoFiy0gZcE",
  authDomain: "react-storage-6db86.firebaseapp.com",
  databaseURL: "https://react-storage-6db86.firebaseio.com",
  projectId: "react-storage-6db86",
  storageBucket: "react-storage-6db86.appspot.com",
  messagingSenderId: "194382684678",
  appId: "1:194382684678:web:6d44c90e4d752c93bb9987",
  measurementId: "G-9M85TMB941"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
