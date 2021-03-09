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


  export const createUserProfileDocument = async(userAuth, additionalData)=>{
      if(!userAuth) return ; 

      const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();
      //console.log(snapShot);

      if(!snapShot.exists){
         const {displayName, email} = userAuth;
         const createdAt = new Date();

         try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
         } catch(error){

                console.log("error creating user", error.message );

         }

      }

      return userRef;
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;