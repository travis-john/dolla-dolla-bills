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

function renderCryptoNews() {
  $.ajax({
    url: cryptoQueryURL,
    method: 'GET'
  }).then(function(cryptoResponse) {
    console.log(cryptoResponse);

    for (var i = 0; i < cryptoResponse.response.docs.length; i++) {
      $('.crypto-news-tbody').append(
        `<tr>
            <td><a class='crypto-news-link' href='${cryptoResponse.response.docs[i].web_url}'>${cryptoResponse.response.docs[i].headline.main}</a></td>
         </tr>`
      );
    }
  });
}

function renderStocksNews() {
  $.ajax({
    url: stocksQueryURl,
    method: 'GET'
  }).then(function(stocksResponse) {
    console.log(stocksResponse);

    for (var i = 0; i < stocksResponse.response.docs.length; i++) {
      $('.stocks-news-body').append(
        `<tr>
            <td><a class='stocks-news-link' href='${stocksResponse.response.docs[i].web_url}'>${stocksResponse.response.docs[i].headline.main}</a></td>
         </tr>`
      );
    }
  });
}

///// NYT CODE END /////

///// COINLIB CODE START /////

var cryptoAPIKey = '04cba1c6d138450a061c3b153a670503a29f5ea26e47756654c8e18a11b9306e',
    coinlibAPIKey = 'cc91d6b22f005e77',
    coinlibQueryURL = 'https://coinlib.io/api/v1/coin?key=' + coinlibAPIKey + '&pref=USD&symbol=BTC,ETH,XMR,MLN,DASH',
    basicCryptoQueryURL = 'https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=BTC,ETH,XMR,MLN,DASH,GBP&tsym=USD&api_key=' + cryptoAPIKey,
    priceCryptoQueryURL = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XMR,MLN,DASH&tsyms=USD&api_key=' + cryptoAPIKey;

function renderCryptoRates() {

  $('.crypto-cards-row').empty();

  $.ajax({
    url: coinlibQueryURL,
    method: 'GET'
  }).then(function(cryptoResponse) {
    console.log(cryptoResponse);

    for (var i = 0; i < cryptoResponse.coins.length; i++) {
      var cardsRow = $('.crypto-cards-row');
      cardsRow.append(`
              <div class="col s12 m6 mb-1" id="${cryptoResponse.coins[i].name}">
                <div class="card">
                  <div class="card-content valign-wrapper">
                    <div class="card-text">
                      <span class="card-title">${cryptoResponse.coins[i].name}</span>
                      <a class="btn-floating halfway-fab waves-effect waves-light red add-favorite"><i class="material-icons">add</i></a>
                      <div class='row'>
                        <div class='col s6'>
                          <ul><li><b>Price: </b>$${cryptoResponse.coins[i].price}</li><li><b>Day High: </b>${cryptoResponse.coins[i].high_24h}<li><li><b>Day Low: </b>${cryptoResponse.coins[i].low_24h}</li></ul>
                        </div>
                        <div class='col s6'>
                          <ul><li><b>Hourly Change: </b>$${cryptoResponse.coins[i].delta_1h}</li><li><b>Daily Change: </b>${cryptoResponse.coins[i].delta_24h}<li><li><b>Weekly Change: </b>${cryptoResponse.coins[i].delta_7d}</li></ul>
                        </div>
                      </div>
                      <i>Chart Here</i>
                    </div>
                  </div>
                  <div class="card-action"><a href="#">View report</a></div>
                </div>
              </div>`);
    }

  });
  // $.ajax({
  //   url: basicCryptoQueryURL,
  //   method: 'GET'
  // }).then(function(basicCryptoResponse){
  //   console.log(basicCryptoResponse);
  //
  //   $.ajax({
  //     url: priceCryptoQueryURL,
  //     method: 'GET'
  //   }).then(function(priceCryptoResponse){
  //     console.log(priceCryptoResponse.DISPLAY);
  //
  //     for (var i = 0; i < basicCryptoResponse.Data.length; i++){
  //       var cardsRow = $('.crypto-cards-row');
  //       cardsRow.append(`
  //         <div class="col s12 m6 mb-1">
  //           <div class="card">
  //             <div class="card-content valign-wrapper">
  //               <div class="card-text">
  //                 <span class="card-title">${basicCryptoResponse.Data[i].CoinInfo.FullName}</span>
  //                 <a class="btn-floating halfway-fab waves-effect waves-light red add-favorite"><i class="material-icons">add</i></a>
  //                     <span><b>Price:</b>${priceCryptoResponse.DISPLAY[i].USD.PRICE}</span>
  //                 <i>Chart Here</i>
  //               </div>
  //             </div>
  //             <div class="card-action"><a href="#">View report</a></div>
  //           </div>
  //         </div>`);
  //     }
  //
  //   });
  //
  //
  //
  // });
}

///// CRYPTO SEARCH FUNCTION /////

$('#crypto-submit').click(function(){
  var coin = $('#crypto-search').val().trim(),
      cryptoSearchAPIKEY = 'cc91d6b22f005e77',
      cryptoSearchURL = 'https://coinlib.io/api/v1/coin?key=' + cryptoSearchAPIKEY + '&pref=USD&symbol=' + coin;

      $.ajax({
        url: cryptoSearchURL,
        method: 'GET'
      }).then(function(cryptoSearchResponse){
        console.log(cryptoSearchResponse);
        var cardsRow = $('.crypto-cards-row');

        cardsRow.prepend(`
          <div class="col s12 m6 mb-1">
            <div class="card">
              <div class="card-content valign-wrapper">
                <div class="card-text">
                  <span class="card-title">${cryptoSearchResponse.name}</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red add-favorite"><i class="material-icons">add</i></a>
                  <div class='row'>
                    <div class='col s6'>
                      <ul><li><b>Price: </b>$${cryptoSearchResponse.price}</li><li><b>Day High: </b>${cryptoSearchResponse.high_24h}<li><li><b>Day Low: </b>${cryptoSearchResponse.low_24h}</li></ul>
                    </div>
                    <div class='col s6'>
                      <ul><li><b>Hourly Change: </b>$${cryptoSearchResponse.delta_1h}</li><li><b>Daily Change: </b>${cryptoSearchResponse.delta_24h}<li><li><b>Weekly Change: </b>${cryptoSearchResponse.delta_7d}</li></ul>
                    </div>
                  </div>
                  <i>Chart Here</i>
                </div>
              </div>
              <div class="card-action"><a href="#">View report</a></div>
            </div>
          </div>`);
      });
});


///// SWITCHING BETWEEN TABS IN DASHBOARD /////
cryptoTrigger.click(function() {
  $('.favorites').removeClass('active');
  $('.stocks').removeClass('active');
  $('.crypto').addClass('active');
  $('.stocks-news-row').addClass('d-none');
  $('.stocks-charts-row').addClass('d-none');
  $('.crypto-charts-row').removeClass('d-none');
  $('.crypto-news-row').removeClass('d-none');
  $('.favorites-row').addClass('d-none');
  favoriteTrigger.removeClass('active');
  stocksTrigger.removeClass('active');
  cryptoTrigger.addClass('active');
  renderCryptoNews();
  renderCryptoRates();
});

stocksTrigger.click(function() {
  $('.favorites').removeClass('active');
  $('.crypto').removeClass('active');
  $('.stocks').addClass('active');
  $('.crypto-charts-row').addClass('d-none');
  $('.crypto-news-row').addClass('d-none');
  $('.stocks-charts-row').removeClass('d-none');
  $('.stocks-news-row').removeClass('d-none');
  $('.favorites-row').addClass('d-none');
  favoriteTrigger.removeClass('active');
  cryptoTrigger.removeClass('active');
  stocksTrigger.addClass('active');
  renderStocksNews();
  renderStockRates();
});

favoriteTrigger.click(function() {
  $('.favorites').addClass('active');
  $('.stocks').removeClass('active');
  $('.crypto').removeClass('active');
  $('.crypto-charts-row').addClass('d-none');
  $('.crypto-news-row').addClass('d-none');
  $('.stocks-charts-row').addClass('d-none');
  $('.stocks-news-row').addClass('d-none');
  $('.favorites-row').removeClass('d-none');
  cryptoTrigger.removeClass('active');
  stocksTrigger.removeClass('active');
  favoriteTrigger.addClass('active');
});

$('.add-favorite').click(function() {

  //// add favorite function here /////

});

$('.remove-favorite').click(function() {

  ///// remove favorite function here /////

})
