import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCehNYmRud0VpwrVnuXt7bzPEVoA282BZg",
    authDomain: "fir-messaging-e60d7.firebaseapp.com",
    databaseURL: "https://fir-messaging-e60d7.firebaseio.com",
    projectId: "fir-messaging-e60d7",
    storageBucket: "fir-messaging-e60d7.appspot.com",
    messagingSenderId: "420592940129",
    appId: "1:420592940129:web:7b84a8d2953a83abd26620"
};

firebase.initializeApp(config);

export default firebase;