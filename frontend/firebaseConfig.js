import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCdjuKe_DkpM9PT71WMfl7l3SVpCeZfD5c",
  authDomain: "mobilitymate-a8b53.firebaseapp.com",
  projectId: "mobilitymate-a8b53",
  storageBucket: "mobilitymate-a8b53.appspot.com",
  messagingSenderId: "911524752185",
  appId: "1:911524752185:web:928da1ee8a528a348356e8"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
export const auth = firebase.auth();
