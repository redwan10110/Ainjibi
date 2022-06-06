// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLMXSQOIzifh4b780pRpRoXjTLkjj5Pqg",
  authDomain: "lawyer-43f05.firebaseapp.com",
  projectId: "lawyer-43f05",
  storageBucket: "lawyer-43f05.appspot.com",
  messagingSenderId: "806474777458",
  appId: "1:806474777458:web:de3250ea733cc6c73493eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;