// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API,
  authDomain: "chicago-test-a2950.firebaseapp.com",
  projectId: "chicago-test-a2950",
  storageBucket: "chicago-test-a2950.firebasestorage.app",
  messagingSenderId: "47147392996",
  appId: "1:47147392996:web:6ed7fd91aabf8f5ee071f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);