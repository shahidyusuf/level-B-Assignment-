import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD1uax-0-qL-fu49RU8e2qrrEKz-OPnxcc",
  authDomain: "software-lms-41785.firebaseapp.com",
  projectId: "software-lms-41785",
  storageBucket: "software-lms-41785.appspot.com",
  messagingSenderId: "1021129885925",
  appId: "1:1021129885925:web:d2662d34f73c4efe822c0c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };
