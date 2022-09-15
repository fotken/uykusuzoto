// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDFqZBMt82Irld1ZAgEEWshYw12uPRxXjM",
  authDomain: "uykusuz-bf5cd.firebaseapp.com",
  databaseURL: "https://uykusuz-bf5cd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "uykusuz-bf5cd",
  storageBucket: "uykusuz-bf5cd.appspot.com",
  messagingSenderId: "713400981657",
  appId: "1:713400981657:web:161d372fd1380a68fec008"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = auth.GoogleAuthProvider;
// Initialize Firebase
