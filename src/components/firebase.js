import firebase from 'firebase/compat/app';
import 'firebase/compat/app'
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';
 import 'firebase/compat/storage'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByYoIPY8EVZ5PDuPCj8i1DtcoLRrUJNsU",
  authDomain: "disney-plus-clone-c34e2.firebaseapp.com",
  projectId: "disney-plus-clone-c34e2",
  storageBucket: "disney-plus-clone-c34e2.appspot.com",
  messagingSenderId: "177674570054",
  appId: "1:177674570054:web:130283271ffbc4ec4b3d47"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);//initial firebase
const db= firebase.firestore();//connect db
const auth= firebase.auth();//authorization

const provider =new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage()//it will contain data
export {auth,storage,provider};
export default db;