import firebase from 'firebase';

// add SDK Firebase
 var firebaseConfig = {
    //paste your SDK here
  apiKey: "AIzaSyBMMKUGL-Wx8TeWfU0mgFzwROHH4x5C2pw",
  authDomain: "pro-58-5819e.firebaseapp.com",
  databaseURL: "https://pro-58-5819e-default-rtdb.firebaseio.com",
  projectId: "pro-58-5819e",
  storageBucket: "pro-58-5819e.appspot.com",
  messagingSenderId: "987717383616",
  appId: "1:987717383616:web:b4bdc17b51555196e24425"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
