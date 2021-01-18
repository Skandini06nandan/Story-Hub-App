import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAFah--fJ8ZAOMbtV8HwKjmYE17oED2H9Y",
    authDomain: "bed-time-stories-876c9.firebaseapp.com",
    projectId: "bed-time-stories-876c9",
    storageBucket: "bed-time-stories-876c9.appspot.com",
    messagingSenderId: "556791215598",
    appId: "1:556791215598:web:f130316b9867b64519caff",
    measurementId: "G-VP9QJWN84Z"
  };
  firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
