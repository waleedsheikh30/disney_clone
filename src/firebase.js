import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXMwmBaVZfe9-rfdiob387-e3ZmTgkW7w",
    authDomain: "disneyplusclone-ac3d8.firebaseapp.com",
    projectId: "disneyplusclone-ac3d8",
    storageBucket: "disneyplusclone-ac3d8.appspot.com",
    messagingSenderId: "134242755587",
    appId: "1:134242755587:web:7966644535deef16bc5a36"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbconfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default dbconfig