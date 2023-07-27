
import firebase from 'firebase/compat/app';

import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuYDeEiffrq-Co9ep4JKUao8e9OIss57Y",
    authDomain: "mvp-fintech.firebaseapp.com",
    projectId: "mvp-fintech",
    storageBucket: "mvp-fintech.appspot.com",
    messagingSenderId: "379640171639",
    appId: "1:260228059606:ios:cb1f6783b5ce1dda4ed477",
};

let app;

if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}
