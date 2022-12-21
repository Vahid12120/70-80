import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZJKB0qKYB6UjuPGupOvy7tnOmUffxE1A",
  authDomain: "project-x-2bffb.firebaseapp.com",
  projectId: "project-x-2bffb",
  storageBucket: "project-x-2bffb.appspot.com",
  messagingSenderId: "190841184527",
  appId: "1:190841184527:web:b3046298beaf46a4e95e7a",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
