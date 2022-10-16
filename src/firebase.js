import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvHl9rgoWNlHjC7hIp3WN0u9kuxRyW6HA",
  authDomain: "chatapp-979d5.firebaseapp.com",
  databaseURL: "https://chatapp-979d5-default-rtdb.firebaseio.com",
  projectId: "chatapp-979d5",
  storageBucket: "chatapp-979d5.appspot.com",
  messagingSenderId: "613753128254",
  appId: "1:613753128254:web:8684770acfb11dbfd7d86f",
  measurementId: "G-R443G8YZ3P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
