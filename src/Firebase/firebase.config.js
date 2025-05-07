// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1ouRhpnbmkTcxvsxYrFAtPw-o1Zr7-Kg",
  authDomain: "appstore-platform-with-react.firebaseapp.com",
  projectId: "appstore-platform-with-react",
  storageBucket: "appstore-platform-with-react.firebasestorage.app",
  messagingSenderId: "1049942020065",
  appId: "1:1049942020065:web:0ff5150ac60b4c557a0ca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;