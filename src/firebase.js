// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLvdK0N-kXhnQF6uRWX69kXSWIIrbDoHs",
  authDomain: "soild-oak-tree.firebaseapp.com",
  projectId: "soild-oak-tree",
  storageBucket: "soild-oak-tree.firebasestorage.app",
  messagingSenderId: "709854461762",
  appId: "1:709854461762:web:13664206aca3edd9b1d2db",
  measurementId: "G-RK4ZYNKVZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);