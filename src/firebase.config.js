import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNuHpXdHUTt3iwqMGqqFoIbczmhMksAL0",
  authDomain: "foodorderingapp-b902d.firebaseapp.com",
  databaseURL: "https://foodorderingapp-b902d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "foodorderingapp-b902d",
  storageBucket: "foodorderingapp-b902d.appspot.com",
  messagingSenderId: "488488957540",
  appId: "1:488488957540:web:5bc040f88cf29721ff9171",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
