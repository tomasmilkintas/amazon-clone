import firebase from "firebase";

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnYtooBRavjvd89u58EZOOpcgqksRg7Gg",
    authDomain: "clone-a097e.firebaseapp.com",
    databaseURL: "https://clone-a097e.firebaseio.com",
    projectId: "clone-a097e",
    storageBucket: "clone-a097e.appspot.com",
    messagingSenderId: "4669512548",
    appId: "1:4669512548:web:583a8df3c297de47357871",
    measurementId: "G-3NC44B71DB",
});

const auth = firebase.auth();

export { auth };
