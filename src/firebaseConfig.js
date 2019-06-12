import firebase from 'firebase'

var config = {
    apiKey: 'AIzaSyAXArzAEpV8d1rL2Cg2fO2JTEAyEp7So6k',
    databaseURL: 'https://anonchat-1a96d.firebaseio.com/',
    storageBucket: 'anonchat-1a96d'
}

let db = firebase.initializeApp(config);

export default db;