// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCALgNaj-B9TwgMdYfkYsYJ0PJzntEZ84",
  authDomain: "achou-app-aula-main.firebaseapp.com",
  projectId: "achou-app-aula-main",
  storageBucket: "achou-app-aula-main.appspot.com",
  messagingSenderId: "656720910230",
  appId: "1:656720910230:web:5d9a9af7d1bd2aea53efb7"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;