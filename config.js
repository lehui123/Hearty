import firebase from 'firebase'
import "firebase/database";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCN5JM-aibPek6-h6xwNKknJiy3MB8Xl-8",
  authDomain: "hearty-3ea06.firebaseapp.com",
  databaseURL: "https://hearty-3ea06-default-rtdb.firebaseio.com",
  projectId: "hearty-3ea06",
  storageBucket: "hearty-3ea06.appspot.com",
  messagingSenderId: "662382196581",
  appId: "1:662382196581:web:951ed03e7769d71692138c"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
