import firebase from 'firebase'
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCT6D9uGl4OQ7d-olXZ06B8OvFhiK8jGK0",
    authDomain: "hearty-2f281.firebaseapp.com",
    projectId: "hearty-2f281",
    databaseURL: "https://hearty-2f281-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "hearty-2f281.appspot.com",
    messagingSenderId: "818441956657",
    appId: "1:818441956657:web:3cf6693e157740d0aa1410"
  };

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };