firebase.initializeApp({
    apiKey: "AIzaSyB_dd5odMuo8NPV-8m_su-wYoCyUlzwmPA",
    authDomain: "test-politickej-gramotno-9fafa.firebaseapp.com",
    databaseURL: "https://test-politickej-gramotno-9fafa.firebaseio.com/",
    projectId: "test-politickej-gramotno-9fafa",
    storageBucket: "test-politickej-gramotno-9fafa.appspot.com",
    messagingSenderId: "762855817031",
    appId: "1:762855817031:web:73cd4b4dc7af4cb96e9662",
    measurementId: "G-3QHYNL1BTR"
});

firebase.auth().signInAnonymously()

firebase.auth().onAuthStateChanged(function(user) {
    if (user) { window.userId = user.uid; }
});
