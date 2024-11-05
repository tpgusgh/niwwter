
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD54L3rEc4OZuvdoShisMvyzTzmWfMvOD4",
  authDomain: "tiwe-30dda.firebaseapp.com",
  projectId: "tiwe-30dda",
  storageBucket: "tiwe-30dda.firebasestorage.app",
  messagingSenderId: "1071380565258",
  appId: "1:1071380565258:web:2527831880c9ef4cb43ef3",
  measurementId: "G-2HNFXNY58N"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);