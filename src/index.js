import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6isBLqL-bwKEvaD3YzBa3TnbKxXnaK3Q",
  authDomain: "proyectofinal34875.firebaseapp.com",
  projectId: "proyectofinal34875",
  storageBucket: "proyectofinal34875.appspot.com",
  messagingSenderId: "353621845189",
  appId: "1:353621845189:web:592503604eedb97d8abcac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
