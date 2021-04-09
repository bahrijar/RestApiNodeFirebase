var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyAqm6GDuVSXXY-i6l66E_UMbf6Yj8eukhM",
    authDomain: "test-cuy.firebaseapp.com",
    databaseURL: "https://test-cuy-default-rtdb.firebaseio.com",
    projectId: "test-cuy",
    storageBucket: "test-cuy.appspot.com",
    messagingSenderId: "493386384851",
    appId: "1:493386384851:web:177afe757b750931c2db26"
};

var fire = firebase.initializeApp(config);
module.exports = fire