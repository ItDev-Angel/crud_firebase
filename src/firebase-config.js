import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHWxWT0Ns28iewyslmzMRPNB2kvxkiZ_Y",
  authDomain: "ecommerce-21d62.firebaseapp.com",
  projectId: "ecommerce-21d62",
  storageBucket: "ecommerce-21d62.appspot.com",
  messagingSenderId: "1053039103895",
  appId: "1:1053039103895:web:99ad8040c1ad864d28fed2",
  measurementId: "G-5PNPVMZE9Q"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)