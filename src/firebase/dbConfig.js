// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFNnZye5qkZMljTcJqvHsuubwyf6kSB7I",
  authDomain: "ecommerce-coder-deb21.firebaseapp.com",
  projectId: "ecommerce-coder-deb21",
  storageBucket: "ecommerce-coder-deb21.appspot.com",
  messagingSenderId: "470807124692",
  appId: "1:470807124692:web:c80fc864654d976eb1f941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}

export const auth = getAuth(app);