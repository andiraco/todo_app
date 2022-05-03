import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBU9vSYJiHJkrnT8eZbNBvBX7wWGHvjiQE",
  authDomain: "todo-app-7ddcc.firebaseapp.com",
  projectId: "todo-app-7ddcc",
  storageBucket: "todo-app-7ddcc.appspot.com",
  messagingSenderId: "607728137327",
  appId: "1:607728137327:web:902180c041e329c2d1099a",
  measurementId: "G-D9ZB94VHCJ"
});

const db = firebaseApp.firestore();

export default db;