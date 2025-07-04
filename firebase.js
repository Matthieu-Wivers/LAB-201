// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE-apiKey,
    authDomain: import.meta.env.FIREBASE-authDomain,
    projectId: import.meta.env.FIREBASE-projectId,
    storageBucket: import.meta.env.FIREBASE-storageBucket,
    messagingSenderId: import.meta.env.FIREBASE-messagingSenderId,
    appId: import.meta.env.FIREBASE-appId,
    measurementId: import.meta.env.FIREBASE-measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);