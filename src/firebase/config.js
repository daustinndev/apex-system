import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBUxm-knL-edZjkK53LTGg1SDIYG-kxjr0",
  authDomain: "apex-system-1ca81.firebaseapp.com",
  projectId: "apex-system-1ca81",
  storageBucket: "apex-system-1ca81.appspot.com",
  messagingSenderId: "642526862924",
  appId: "1:642526862924:web:f54cb2d674dd9aff455ee9"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
const db = getFirestore(app);
export {db}