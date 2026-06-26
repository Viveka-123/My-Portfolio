import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA93avl89lv2M-3yenFkIM40-rYe8J2AIE",
  authDomain: "portfolio-2dd88.firebaseapp.com",
  projectId: "portfolio-2dd88",
  storageBucket: "portfolio-2dd88.firebasestorage.app",
  messagingSenderId: "84601088770",
  appId: "1:84601088770:web:bbf48891b6b1a20498301b"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };