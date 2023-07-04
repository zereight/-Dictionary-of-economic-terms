// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD-5lsUOmmf7NBitSOMpY2uWo2tppombiU',
  authDomain: 'dictionary-of-economic-terms.firebaseapp.com',
  databaseURL:
    'https://dictionary-of-economic-terms-default-rtdb.firebaseio.com',
  projectId: 'dictionary-of-economic-terms',
  storageBucket: 'dictionary-of-economic-terms.appspot.com',
  messagingSenderId: '472080931756',
  appId: '1:472080931756:web:b419049f9ae082a5173809',
  measurementId: 'G-LYPVH6YL3P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseDB = getDatabase(app);
