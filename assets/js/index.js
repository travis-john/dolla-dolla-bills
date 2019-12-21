///// FIREBASE CODE START /////
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
        favorites: 0
      });
    } else {
      // No user is signed in.
    }
  });

  /////  NYT API CODE START /////
  var cryptoTrigger = $('.crypto-trigger'),
      stocksTrigger = $('.stocks-trigger'),
      favoriteTrigger = $('.favorites-trigger'),
      NYTAPIKEY = 'jnU2uozAn1FRTD9raWPlcQsox5hokuSC',
      cryptoQueryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cryptocurrency&fq=newest&api-key=' + NYTAPIKEY;
      stocksQueryURl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=stocks&fq=newest&api-key=' + NYTAPIKEY;

function renderCryptoNews(){
  $.ajax({
    url: cryptoQueryURL,
    method: 'GET'
  }).then(function(cryptoResponse){
    console.log(cryptoResponse);

    for (var i = 0; i < cryptoResponse.response.docs.length; i++){
      $('.crypto-news-tbody').append(
        `<tr>
            <td><a class='crypto-news-link' href='${cryptoResponse.response.docs[i].web_url}'>${cryptoResponse.response.docs[i].headline.main}</a></td>
         </tr>`
      );
    }
  });
}

function renderStocksNews(){
  $.ajax({
    url: stocksQueryURl,
    method: 'GET'
  }).then(function(stocksResponse){
    console.log(stocksResponse);

    for (var i = 0; i < stocksResponse.response.docs.length; i++){
      $('.stocks-news-body').append(
        `<tr>
            <td><a class='stocks-news-link' href='${stocksResponse.response.docs[i].web_url}'>${stocksResponse.response.docs[i].headline.main}</a></td>
         </tr>`
      );
    }
  });
}


cryptoTrigger.click(function(){
  $('.favorites').removeClass('active');
  $('.stocks').removeClass('active');
  $('.crypto').addClass('active');
  $('.stocks-news-row').addClass('d-none');
  $('.stocks-charts-row').addClass('d-none');
  $('.crypto-charts-row').removeClass('d-none');
  $('.crypto-news-row').removeClass('d-none');
  $('.favorites-row').addClass('d-none');
  renderCryptoNews();
});

stocksTrigger.click(function(){
  $('.favorites').removeClass('active');
  $('.crypto').removeClass('active');
  $('.stocks').addClass('active');
  $('.crypto-charts-row').addClass('d-none');
  $('.crypto-news-row').addClass('d-none');
  $('.stocks-charts-row').removeClass('d-none');
  $('.stocks-news-row').removeClass('d-none');
  $('.favorites-row').addClass('d-none');
  renderStocksNews();
});

favoriteTrigger.click(function(){
  $('.favorites').addClass('active');
  $('.stocks').removeClass('active');
  $('.crypto').removeClass('active');
  $('.crypto-charts-row').addClass('d-none');
  $('.crypto-news-row').addClass('d-none');
  $('.stocks-charts-row').addClass('d-none');
  $('.stocks-news-row').addClass('d-none');
  $('.favorites-row').removeClass('d-none');
});

$('.add-favorite').click(function(){

  //// add favorite function here /////

});

$('.remove-favorite').click(function(){

  ///// remove favorite function here /////

})
