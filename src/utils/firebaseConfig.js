// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2IpBCJ8EKVwK7104KfO4ZlPjQupwlMEo",
  authDomain: "coder-bbdde.firebaseapp.com",
  projectId: "coder-bbdde",
  storageBucket: "coder-bbdde.appspot.com",
  messagingSenderId: "165635070911",
  appId: "1:165635070911:web:9bb5f1e62a668efc1b5f0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
