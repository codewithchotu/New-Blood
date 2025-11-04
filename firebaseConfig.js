// ✅ Firebase Config & Initialization
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBf06vLDIAMigl50cNSxUAv7BhI3GyHGgc",
  authDomain: "new-blood-26bf2.firebaseapp.com",
  projectId: "new-blood-26bf2",
  storageBucket: "new-blood-26bf2.firebasestorage.app",
  messagingSenderId: "96400267101",
  appId: "1:96400267101:web:6d54fc45c1390a1df33ab4",
  measurementId: "G-LNF0VER1YK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export auth, firestore, messaging
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
export default app;
