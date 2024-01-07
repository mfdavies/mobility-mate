import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdjuKe_DkpM9PT71WMfl7l3SVpCeZfD5c",
  authDomain: "mobilitymate-a8b53.firebaseapp.com",
  projectId: "mobilitymate-a8b53",
  storageBucket: "mobilitymate-a8b53.appspot.com",
  messagingSenderId: "911524752185",
  appId: "1:911524752185:web:928da1ee8a528a348356e8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export async function getCurrentUser() {
  return new Promise((resolve, reject) => {
    if (auth.currentUser) {
      resolve(auth.currentUser);
      return;
    }
    // The user is not found, hence listen to the change
    const removeListener = auth.onAuthStateChanged((user) => {
      removeListener();
      resolve(user);
    }, reject);
  });
}
