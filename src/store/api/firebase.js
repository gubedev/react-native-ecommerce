import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

import {
  APIKEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID,
  APPID,
} from 'config';

const app = firebase.initializeApp({
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}

export function getAuth() {
  return firebase.auth(app);
}
