import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll } from 'firebase/storage'
/*import { 
    getFirestore,
    getDoc, 
    doc,
    getDocs,
    collection
} from "firebase/firestore";*/

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYCHmJgLRrg3Q0KKIOQxm-39HcP1tC8ok",
  authDomain: "personal-web-c3a14.firebaseapp.com",
  projectId: "personal-web-c3a14",
  storageBucket: "personal-web-c3a14.appspot.com",
  messagingSenderId: "526419606341",
  appId: "1:526419606341:web:a3f2ee23c12bd5d20c1c2c",
  measurementId: "G-RSNGLZQL76"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage()

export const getRef = (query_ref) => {
    return ref(storage, query_ref)
}

export {storage};
