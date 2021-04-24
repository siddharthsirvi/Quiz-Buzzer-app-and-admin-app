import firebase from 'firebase';

const firebaseConfig = {
 apiKey: "AIzaSyCCeMqNvO91fN_2BpebtwhTTdjz2-1HNuo",
    authDomain: "quiz-buzzer-app.firebaseapp.com",
    databaseURL: "https://quiz-buzzer-app.firebaseio.com",
    projectId: "quiz-buzzer-app",
    storageBucket: "quiz-buzzer-app.appspot.com",
    messagingSenderId: "180413652663",
    appId: "1:180413652663:web:9508637b794341aaf73732"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()