// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_TOKEN,
  authDomain: "union-client-project.firebaseapp.com",
  projectId: "union-client-project",
  storageBucket: "union-client-project.appspot.com",
  messagingSenderId: "545962257616",
  appId: "1:545962257616:web:57fca1fcd4b41b884e02d5",
  measurementId: "G-BCDZENHV9S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
export const auth = getAuth(app);

export const db = getFirestore(app);
