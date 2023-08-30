const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

// Add Firebase SDK Snippet
const firebaseConfig = {
  apiKey: "AIzaSyAs406UamvIsIi8zKGUk3nAtpunvJBS2xI",
  authDomain: "hasset-b4c6f.firebaseapp.com",
  databaseURL: "https://hasset-b4c6f-default-rtdb.firebaseio.com",
  projectId: "hasset-b4c6f",
  storageBucket: "hasset-b4c6f.appspot.com",
  messagingSenderId: "362932822631",
  appId: "1:362932822631:ios:2c4a3c42d496adbedbeac2",
  measurementId: "",
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
