import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAzTccUuce2XaZJ4_D3ac7GukmZzcskvzw",
  authDomain: "rupdigital.firebaseapp.com",
  databaseURL: "https://rupdigital-default-rtdb.firebaseio.com",
  projectId: "rupdigital",
  storageBucket: "rupdigital.firebasestorage.app",
  messagingSenderId: "725839433475",
  appId: "1:725839433475:web:2a8559642f2696589a2336"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
