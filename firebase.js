// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// import { auth } from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8vQTLR-Y67NwK7MR01NJIn7-rZXmLaU4",
  authDomain: "reelngen-356ba.firebaseapp.com",
  projectId: "reelngen-356ba",
  storageBucket: "reelngen-356ba.appspot.com",
  messagingSenderId: "328771857492",
  appId: "1:328771857492:web:a5cd4d89ce76db8c6591c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth }
// export default app;