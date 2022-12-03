// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCby9qyaw_MTfgbNki11fl0-Ul2U7Yfo8c",
  authDomain: "esp32-e9c53.firebaseapp.com",
  databaseURL: "https://esp32-e9c53-default-rtdb.firebaseio.com",
  projectId: "esp32-e9c53",
  storageBucket: "esp32-e9c53.appspot.com",
  messagingSenderId: "173160437700",
  appId: "1:173160437700:web:8036d75f71f65960923691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);