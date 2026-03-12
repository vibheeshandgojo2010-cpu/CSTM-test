// firebase-config.js - USE YOUR CREDENTIALS
const firebaseConfig = {
  apiKey: "AIzaSyCLV8wTESyEeV3NNgNn_2rKihkaqePaybw",
  authDomain: "custom-labs-ab739.firebaseapp.com",
  projectId: "custom-labs-ab739",
  storageBucket: "custom-labs-ab739.firebasestorage.app",
  messagingSenderId: "793425250402",
  appId: "1:793425250402:web:1522794b7397e0b4bda93b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

console.log('✅ Firebase configured');