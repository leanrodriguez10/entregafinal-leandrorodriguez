 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMOShHq4G7Z3K_yBbeypSBbnH8kohp2ag",
  authDomain: "react-final-95c49.firebaseapp.com",
  projectId: "react-final-95c49",
  storageBucket: "react-final-95c49.appspot.com",
  messagingSenderId: "746608753026",
  appId: "1:746608753026:web:19a683bc45abd08e0ef79b"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
