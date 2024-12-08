// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdDlZPi_wSMkDASQQuj0IvB0zDEP88-AM",
  authDomain: "web-videoapp.firebaseapp.com",
  projectId: "web-videoapp",
  storageBucket: "web-videoapp.firebasestorage.app",
  messagingSenderId: "753484028277",
  appId: "1:753484028277:web:f808c9c6dd23d344889b3c",
  measurementId: "G-W7SQBHK2FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;