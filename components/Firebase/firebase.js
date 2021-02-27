import * as firebase from 'firebase';
import 'firebase/auth';
import "firebase/firestore"
import firebaseConfig from './firebaseConfig';
import {} from '../../screens/RegisterScreen'
import { string } from 'yup';

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let haha = ''

export const auth = firebase.auth();
export const dbh = firebase.firestore();


export const loginWithEmail = (email, password) =>
  auth
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      const x2 = data.user.uid;
      x3 = x2;
      window.x3 = x2;
    })
    .catch((error) => {
      console.log(error);
    });
    

  


export const registerWithEmail = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(data => {
      const x2 = (data.user.uid);
      x3 = x2
      dbh.collection(x2).doc().set({
       employment: "plumber",
       outfitColor: "red",
       specialAttack: "fireball",
     });
     window.x3 = x2
    })
    .catch(error => {
      console.log(error);
    });

export const logout = () => auth.signOut();
export var x3;
export const passwordReset = email => auth.sendPasswordResetEmail(email);




