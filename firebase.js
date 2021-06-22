import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDrZtfVz5VX5S71QY9--S-Wu4FbtKof1YA",
  authDomain: "blogapp-23fab.firebaseapp.com",
  projectId: "blogapp-23fab",
  storageBucket: "blogapp-23fab.appspot.com",
  messagingSenderId: "17159320082",
  appId: "1:17159320082:web:62a0a7dbfe448e2cf31ecb"
};
// Initialize Firebase
if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
  const cloud = firebase.firestore();
  const storage = firebase.storage();
  const db = firebase.database();
  export {auth,cloud,storage,db}