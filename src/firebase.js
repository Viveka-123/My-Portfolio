import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA93avl89lv2M-3yenFkIM40-rYe8J2AIE",
  authDomain: "portfolio-2dd88.firebaseapp.com",
  projectId: "portfolio-2dd88",
  storageBucket: "portfolio-2dd88.firebasestorage.app",
  messagingSenderId: "84601088770",
  appId: "1:84601088770:web:bbf48891b6b1a20498301b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export config for debugging and confirm project during dev
if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  try {
    // eslint-disable-next-line no-console
    console.log("[firebase] initialized projectId:", firebaseConfig.projectId);
  } catch (e) {}
}

export { db, collection, addDoc, firebaseConfig };