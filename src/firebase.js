import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    getDoc, 
    doc,
    getDocs,
    collection
} from "firebase/firestore";

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
// const analytics = getAnalytics(firebase);
const db = getFirestore(firebaseApp);

// TODO 'cache' data locally in app to remove loading times
// for blog and blogposts

export const getBlogPost = (blogpost) => {
    const blogPostRef = doc(db, 'blogposts', blogpost)
    return getDoc(blogPostRef);
};

export const getBlogIndex = async (coll_id) => {
    const blogSnapshot = await getDocs(collection(db, coll_id));
    const blogList= blogSnapshot.docs.map((doc) => doc.data());
    return blogList;
};

export default db;