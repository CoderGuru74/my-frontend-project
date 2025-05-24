// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJcO3k2Q82EHzxRjgub0fdRe5eVnOnXfs",
  authDomain: "ai-helmet-backend.firebaseapp.com",
  databaseURL: "https://ai-helmet-backend-default-rtdb.firebaseio.com",
  projectId: "ai-helmet-backend",
  storageBucket: "ai-helmet-backend.appspot.com",
  messagingSenderId: "563376332984",
  appId: "1:563376332984:web:a281d05d6e8e133ef4544d"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue };
