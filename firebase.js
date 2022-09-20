// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM1mmTYU3FWkC-g-ftEV3JVQk7_OQ1l0A",
    authDomain: "lana-cos.firebaseapp.com",
    projectId: "lana-cos",
    storageBucket: "lana-cos.appspot.com",
    messagingSenderId: "279623071047",
    appId: "1:279623071047:web:544f2ac1f4214afeac0862",
    measurementId: "G-BF3Q21KJMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);