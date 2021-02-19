import firebase from 'firebase/app';
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.ONE,
    authDomain: process.env.TWO,
    projectId: process.env.THREE,
    storageBucket: process.env.FOUR,
    messagingSenderId: process.env.FIVE,
    appId: process.env.SIX
};

if (!firebase) {
    firebase.initializeApp(firebaseConfig);
};

export default firebase;