import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBheM-ZCzpprv5kjaEkouzyZ9zh2FB9f8Y",
  authDomain: "photowall-764db.firebaseapp.com",
  databaseURL: "https://photowall-764db.firebaseio.com",
  projectId: "photowall-764db",
  storageBucket: "photowall-764db.appspot.com",
  messagingSenderId: "514929180812",
  appId: "1:514929180812:web:d4eaa733efd046212bfba9",
  measurementId: "G-NSNTWS4RFT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fbDatabase = firebase.database();


export default firebase;
