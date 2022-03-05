import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgBRnhiosx8xn3BbiXuNedayRzqDFGVc4",
  authDomain: "kodius-task.firebaseapp.com",
  projectId: "kodius-task",
  storageBucket: "kodius-task.appspot.com",
  messagingSenderId: "439696822737",
  appId: "1:439696822737:web:bbf7d6a0bfdc1b402390f0",
  measurementId: "G-JQWEP04DQ8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };