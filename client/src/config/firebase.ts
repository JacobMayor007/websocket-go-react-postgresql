import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo7rz37BuV4gCAol-t9tU5NkEbeL6Yh_8",
  authDomain: "pet-care-pro-v2.firebaseapp.com",
  projectId: "pet-care-pro-v2",
  storageBucket: "pet-care-pro-v2.firebasestorage.app",
  messagingSenderId: "216530403102",
  appId: "1:216530403102:web:0927e6d2bbe2946bf9130f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
