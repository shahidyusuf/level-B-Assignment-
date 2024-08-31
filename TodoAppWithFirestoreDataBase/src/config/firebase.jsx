import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD-Yq7PkXc3Pwv0y02dkmGzGZwRLLd61GE",
  authDomain: "todos-app-withfirebase.firebaseapp.com",
  projectId: "todos-app-withfirebase",
  storageBucket: "todos-app-withfirebase.appspot.com",
  messagingSenderId: "941207854273",
  appId: "1:941207854273:web:8e2b94184b227241784840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);