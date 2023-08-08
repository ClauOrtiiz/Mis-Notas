// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeM65BAeLnIbLK1L5DHhAEXsPuP_XsfDM",
    authDomain: "mis-notas-c84c0.firebaseapp.com",
    projectId: "mis-notas-c84c0",
    storageBucket: "mis-notas-c84c0.appspot.com",
    messagingSenderId: "419793897839",
    appId: "1:419793897839:web:bc26cbb40067146eab409a",
    measurementId: "G-TG5R83XD51"
};

// Initialize Firebase
/* EXPOSTS */
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

