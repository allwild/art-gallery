// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkfou4nwUxNq9fUW4x-6c3c5A5Cy4F2Vc",
  authDomain: "allwild.github.io/art-gallery",
  projectId: "artworks-af2d9",
  storageBucket: "artworks-af2d9.appspot.com",
  messagingSenderId: "828157544110",
  appId: "1:828157544110:web:fa3a065a589c74a0414f3f",
  measurementId: "G-EVMLKTF7ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app