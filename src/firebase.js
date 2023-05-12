// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvQsZG1YcFWMXi_e7exNxLzi9TnFeo-Pk",
  authDomain: "chat-eb7e5.firebaseapp.com",
  databaseURL: "https://chat-eb7e5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-eb7e5",
  storageBucket: "chat-eb7e5.appspot.com",
  messagingSenderId: "542734243325",
  appId: "1:542734243325:web:4f19dd80888487cda97594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;