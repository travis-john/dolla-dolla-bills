///// FIREBASE CODE START /////

// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
//   ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });
//   var uiConfig = {
//     callbacks: {
//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//         // User successfully signed in.
//         // Return type determines whether we continue the redirect automatically
//         // or whether we leave that to developer to handle.
//         return true;
//       },
//       uiShown: function() {
//         // The widget is rendered.
//         // Hide the loader.
//         document.getElementById('loader').style.display = 'none';
//       },
//       writeUserData: function(userId, name, email, imageUrl) {
//         firebase.database().ref('users/' + userId).set({
//           username: name,
//           email: email,
//           profile_picture : imageUrl,
//           newUser : true
//       })}
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//       // Leave the lines as is for the providers you want to offer your users.
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
//   };
//   ui.start('#firebaseui-auth-container', uiConfig);

  /////  NYT API CODE START /////
  var cryptoTrigger = $('.crypto-trigger'),
      stocksTrigger = $('.stocks-trigger'),
      favoriteTrigger = $('.favorites-trigger'),
      NYTAPIKEY = 'jnU2uozAn1FRTD9raWPlcQsox5hokuSC',
      cryptoQueryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cryptocurrency&fq=newest&api-key=' + NYTAPIKEY;

function renderCryptoNews(){
  $.ajax({
    url: cryptoQueryURL,
    method: 'GET'
  }).then(function(cryptoResponse){
    console.log(cryptoResponse);

    for (var i = 0; i < cryptoResponse.response.docs.length; i++){
      $('.crypto-news-tbody').append(
        `<tr>
            <td><a class='crypto-news-link' href='${cryptoResponse.response.docs[i].web_url}'>${cryptoResponse.response.docs[i].abstract}</a></td>
         </tr>`
      );
    }
  });
}


cryptoTrigger.click(function(){
  $('.favorites').removeClass('active');
  $('.crypto').addClass('active');
  $('.crypto-charts-row').removeClass('d-none');
  $('.crypto-news-row').removeClass('d-none');
  $('.favorites-row').addClass('d-none');
  renderCryptoNews();
})
