import firebase from './firebase';

const FirebaseToken = () => {

    const messaging = firebase.messaging()
    messaging.requestPermission()
        .then(() => {
            return messaging.getToken()
        })
        .then((token) => {
            console.log('token result is : ', token);
        })
}

export default FirebaseToken;
