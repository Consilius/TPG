firebase.initializeApp({
    apiKey: "AIzaSyB_dd5odMuo8NPV-8m_su-wYoCyUlzwmPA",
    authDomain: "test-politickej-gramotno-9fafa.firebaseapp.com",
    databaseURL: "https://test-politickej-gramotno-9fafa.firebaseio.com/",
    storageBucket: ""
});

firebase.auth().signInAnonymously().catch(function(error) {
    console.log("err", error);
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.userId = user.uid;
    } else {
        // No user is signed in.
    }
});

