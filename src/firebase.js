import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwF0U-W4PxdI18f9vBxSDTjLzPQsBNyTY",
  authDomain: "clone-84d0e.firebaseapp.com",
  databaseURL: "https://clone-84d0e.firebaseio.com",
  projectId: "clone-84d0e",
  storageBucket: "clone-84d0e.appspot.com",
  messagingSenderId: "1026188625638",
  appId: "1:1026188625638:web:4319d2598a4cbe85f95d27",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
