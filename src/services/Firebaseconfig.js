import { initializeApp } from 'firebase/app';
import {getFirestore, initializeFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZeH08bsaUIcqohyMW972exQnfhVgLfnQ",
  authDomain: "tempchat-bee6b.firebaseapp.com",
  databaseURL: "https://tempchat-bee6b-default-rtdb.firebaseio.com",
  projectId: "tempchat-bee6b",
  storageBucket: "tempchat-bee6b.appspot.com",
  messagingSenderId: "208980020602",
  appId: "1:208980020602:web:8ff8f9da70cf16ab215ac3",
  measurementId: "G-C4Y29PHWCR"
}

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
console.log(db)