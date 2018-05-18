
import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyDW8Le2ibSi7RYUwzkuHns7qEW9H4zSldc",
   authDomain: "react-auth-c8955.firebaseapp.com",
   databaseURL: "https://react-auth-c8955.firebaseio.com",
   projectId: "react-auth-c8955",
   storageBucket: "react-auth-c8955.appspot.com",
   messagingSenderId: "527098725804"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
