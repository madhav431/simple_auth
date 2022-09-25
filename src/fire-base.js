import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAtZM5VHzVp5uLNRoulyC35h0B5xHQorEE",
    authDomain: "auth-b8e03.firebaseapp.com",
    projectId: "auth-b8e03",
    storageBucket: "auth-b8e03.appspot.com",
    messagingSenderId: "558069544196",
    appId: "1:558069544196:web:57b9c1fb0572a58d684c51"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  export {auth,db};
  //export default db;