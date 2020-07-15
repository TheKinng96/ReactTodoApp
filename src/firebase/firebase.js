import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD30VJJZY5rnEChVkpRfGdZ6hYLPpUaphE",
    authDomain: "todo-list-74c52.firebaseapp.com",
    databaseURL: "https://todo-list-74c52.firebaseio.com",
    projectId: "todo-list-74c52",
    storageBucket: "todo-list-74c52.appspot.com",
    messagingSenderId: "847499545800",
    appId: "1:847499545800:web:cff3ff72d2e20e692769fd",
    measurementId: "G-LX1C42CE6W"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db}