import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAdpAI4AnwEdJAQN22WHUdAEHQguuNGETw",
    authDomain: "clothstore-9389d.firebaseapp.com",
    projectId: "clothstore-9389d",
    storageBucket: "clothstore-9389d.appspot.com",
    messagingSenderId: "276860279526",
    appId: "1:276860279526:web:c98f77d815bf15b89fb927",
    measurementId: "G-4S3B0MJK9X"
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;