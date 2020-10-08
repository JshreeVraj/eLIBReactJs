import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyD5OiWuzDApGwteX9_PWupTH_hpGv1-hZs",
    authDomain: "elib1721.firebaseapp.com",
    databaseURL: "https://elib1721.firebaseio.com",
    projectId: "elib1721",
    storageBucket: "elib1721.appspot.com",
    messagingSenderId: "95214881538",
    appId: "1:95214881538:web:81af4597d998f5c284101b",
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createAt = new Date ();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup (provider)

  export default firebase;