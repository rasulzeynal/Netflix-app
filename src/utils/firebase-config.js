import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDHofoh2bA2wfkOdOxpko-AakckrI0Yeus",
  authDomain: "react-netflix-clone-a3cdd.firebaseapp.com",
  projectId: "react-netflix-clone-a3cdd",
  storageBucket: "react-netflix-clone-a3cdd.appspot.com",
  messagingSenderId: "478277086436",
  appId: "1:478277086436:web:4ddf8cd7b1efe2a0d3d0f1",
  measurementId: "G-2W0ER0LZ0Q"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);