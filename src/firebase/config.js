import firebase from 'firease/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAcmVEPY6pFVWy-74gTvjfjcypPbVsjGbM",
  authDomain: "mymoney-9c685.firebaseapp.com",
  projectId: "mymoney-9c685",
  storageBucket: "mymoney-9c685.appspot.com",
  messagingSenderId: "1030504576271",
  appId: "1:1030504576271:web:94b199d0d2119a1696fa7a"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth }