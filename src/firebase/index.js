// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiaAX0EXftKnwyjehHP4LtXPbNHdYx0t8",
  authDomain: "lana-cos-877a1.firebaseapp.com",
  projectId: "lana-cos-877a1",
  storageBucket: "lana-cos-877a1.appspot.com",
  messagingSenderId: "282381418168",
  appId: "1:282381418168:web:6185d991c621ef5804be4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
