import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgzkzgIqjLyFS4zKlOOGllP3wpcvak9rk",
    authDomain: "takashi-6a329.firebaseapp.com",
    projectId: "takashi-6a329",
    storageBucket: "takashi-6a329.appspot.com",
    messagingSenderId: "867238435786",
    appId: "1:867238435786:web:b13f1f5189807f1ef5cd33"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };