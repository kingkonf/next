// Import the functions you need from the SDKs you need
import { initializeApp   } from "firebase/app";
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDOOkPjIP5o6W-DxdAVDxjoNPFQW06VD8",
  authDomain: "education-91f77.firebaseapp.com",
  projectId: "education-91f77",
  storageBucket: "education-91f77.appspot.com",
  messagingSenderId: "104623001567",
  appId: "1:104623001567:web:9ef90631067951d7563e6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
