import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/sauth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn56nHCaLyz6vVJBdmdbRG-ZCaWhYYa8I",
  authDomain: "restaurantapp-b6f79.firebaseapp.com",
  databaseURL: "https://restaurantapp-b6f79-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-b6f79",
  storageBucket: "restaurantapp-b6f79.appspot.com",
  messagingSenderId: "994728764484",
  appId: "1:994728764484:web:cc72333d49a179d3c24811",
};

// Initialize Firebase
const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
// database information
const firestore = getFirestore(app);

// storage

const storage = getStorage(app);

export { auth, firestore, storage };
