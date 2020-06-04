import firebase from 'firebase' 
var Firebase;
var firebaseConfig = {
    apiKey: "AIzaSyCXlrUDBdIHvLi2T4_3DPgMh8-l3KwM6Ys",
    authDomain: "nateo-e66f9.firebaseapp.com",
    databaseURL: "https://nateo-e66f9.firebaseio.com",
    projectId: "nateo-e66f9",
    storageBucket: "nateo-e66f9.appspot.com",
    messagingSenderId: "439292113981",
    appId: "1:439292113981:web:6aaf29de6b4298b7992654"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    Firebase = firebase.initializeApp(firebaseConfig);
}
  export default Firebase;