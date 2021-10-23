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


// const firebaseConfig = {
//     apiKey: "AIzaSyCT6D9uGl4OQ7d-olXZ06B8OvFhiK8jGK0",
//     authDomain: "hearty-2f281.firebaseapp.com",
//     projectId: "hearty-2f281",
//     databaseURL: "https://hearty-2f281-default-rtdb.asia-southeast1.firebasedatabase.app",
//     storageBucket: "hearty-2f281.appspot.com",
//     messagingSenderId: "818441956657",
//     appId: "1:818441956657:web:3cf6693e157740d0aa1410"
//   };
