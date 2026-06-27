import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQMeNMlx-UR_AYrywFg5v8dOFOzCHhcT0",
  authDomain: "fir-crud-d2320.firebaseapp.com",
  databaseURL: "https://fir-crud-d2320-default-rtdb.firebaseio.com",
  projectId: "fir-crud-d2320",
  storageBucket: "fir-crud-d2320.firebasestorage.app",
  messagingSenderId: "224555555523",
  appId: "1:224555555523:web:7ee50de563dd9a9ce2a076",
  measurementId: "G-KPEPSLHPFK"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app) 

export const auth = getAuth(app)