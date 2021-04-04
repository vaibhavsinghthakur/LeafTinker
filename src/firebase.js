import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3RwGsR5GV3lIzfHiETac-1sJSPhHl6Dk",
  authDomain: "just-post-722e2.firebaseapp.com",
  projectId: "just-post-722e2",
  storageBucket: "just-post-722e2.appspot.com",
  messagingSenderId: "294835109706",
  appId: "1:294835109706:web:766dbcdbd72d782b26cbb3",
  measurementId: "G-JSR067N5MH",
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;


