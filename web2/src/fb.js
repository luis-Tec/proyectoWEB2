import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import {getFirestore} from '@firebase/firestore';

export const app_db = firebase.initializeApp({
    "projectId": "proyectoweb2-bb384",
    "appId": "1:378616327460:web:bf903d17a8d396d76617b1",
    "storageBucket": "proyectoweb2-bb384.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDt9YwCnj7aaZA1nfIm8TTCbuPsU1Yys0Y",
    "authDomain": "proyectoweb2-bb384.firebaseapp.com",
    "messagingSenderId": "378616327460"
  });

export const db = getFirestore(app_db);
