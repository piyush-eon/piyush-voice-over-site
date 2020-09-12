import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNfO-Rfnq3rhB4gIA1po_kOb-uM_u1XEc",
  authDomain: "piyushvo.firebaseapp.com",
  databaseURL: "https://piyushvo.firebaseio.com",
  projectId: "piyushvo",
  storageBucket: "piyushvo.appspot.com",
  messagingSenderId: "937351970167",
  appId: "1:937351970167:web:46537bba5298400997b572",
});

var db = firebaseApp.firestore();

export { db };
