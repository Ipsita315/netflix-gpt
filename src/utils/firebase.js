// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD484S9Vs7YjbnKMJkFkw0oy30bPEM4XBo",
  authDomain: "netflixgpt-43dd5.firebaseapp.com",
  projectId: "netflixgpt-43dd5",
  storageBucket: "netflixgpt-43dd5.appspot.com",
  messagingSenderId: "192353064124",
  appId: "1:192353064124:web:7691d53e267b2d86a66cb9",
  measurementId: "G-04H32YFMDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);