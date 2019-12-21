var firebaseConfig = {
  apiKey: "AIzaSyB_Npz0q0b_LJmK7AiW821UFkEUS-BPjck",
  authDomain: "cream-get-the-money.firebaseapp.com",
  databaseURL: "https://cream-get-the-money.firebaseio.com",
  projectId: "cream-get-the-money",
  storageBucket: "cream-get-the-money.appspot.com",
  messagingSenderId: "265093588062",
  appId: "1:265093588062:web:6ca3b31836a5ddfd7d80cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
const database = firebase.database();
var ui = new firebaseui.auth.AuthUI(firebase.auth());

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: "./authenticated.html",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  ui.start('#firebaseui-auth-container', uiConfig);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;

      firebase.database().ref('users/' + userId).set({
        settings: 0
      });
    } else {
      // No user is signed in.
    }
  });


