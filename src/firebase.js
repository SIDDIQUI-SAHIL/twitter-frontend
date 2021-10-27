import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3KaJC7cBx0QVNEr6TfATTERRjcBWQprg",
  authDomain: "twitter-b9b93.firebaseapp.com",
  projectId: "twitter-b9b93",
  storageBucket: "twitter-b9b93.appspot.com",
  messagingSenderId: "861346112309",
  appId: "1:861346112309:web:b6f51485661229f956227c",
  measurementId: "G-763GZTCHMP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
