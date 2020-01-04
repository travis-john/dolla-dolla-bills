// ALPHA VANTAGE - Search Index - TO BE UPDATED
// function searchCompany() {
//   var company = "";
//   var companyURL =
//     "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
//     company +
//     "&apikey=TTJMFECFAT8Y4P9E";

//   $.ajax({
//     url: companyURL,
//     method: "GET"
//   }).then(function(name) {
//     console.log(name);
//   });
// }

renderFavorites();


// ALPHA VANTAGE + ANYCHART - Rendering and Creating Stock Charts - TO BE UPDATED
// function stockChart() {
//   var chartQuery =
//     "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=TTJMFECFAT8Y4P9E";

//   $.ajax({
//     url: chartQuery,
//     method: "GET"
//   }).then(function(msft) {
//     // First JSON object
//     var timeSeries1 = msft["Time Series (5min)"];

//     var chartData = [];
//     for (var key in timeSeries1) {
//       var timeStocks = timeSeries1[key]["1. open"];

//       chartData.push({
//         x: key,
//         value: timeStocks
//       });
//     }
//     anychart.onDocumentReady(function() {
//       // data
//       data = anychart.data.set(chartData);

//       // set chart type
//       var chart1 = anychart.area();

//       // set data
//       var area1 = chart1.splineArea(data);

//       //   Delete X-axis information
//       var labels1 = chart1.xAxis().labels();
//       labels1.enabled(false);

//       // set container and draw chart
//       chart1.container("msft-stock-chart").draw();
//     });
//   });
// }

// WORLD TRADE DATA API - Favorites Page
function renderFavorites() {

  $('.fav-cards-row').empty();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;
      return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        var data = (snapshot.val());
        console.log(data.favorites.favorites);
        var coin = data.favorites.favorites;
        
          
          
          var cryptoSearchAPIKEY = 'cc91d6b22f005e77',
          cryptoSearchURL = 'https://coinlib.io/api/v1/coin?key=' + cryptoSearchAPIKEY + '&pref=USD&symbol=' + coin;
    
          $.ajax({
            url: cryptoSearchURL,
            method: 'GET'
          }).then(function(cryptoSearchResponse){
            console.log(cryptoSearchResponse);
            var favrow = $('.fav-cards-row');
    
            favrow.prepend(`
              <div class="col s12 m6 mb-1">
                <div class="card">
                  <div class="card-content valign-wrapper">
                    <div class="card-text">
                      <span class="card-title">${cryptoSearchResponse.name}</span>
                      <a class="btn-floating halfway-fab waves-effect waves-light red remove-favorite"><i class="material-icons">remove</i></a>
                      <div class='row'>
                        <div class='col s6'>
                          <ul><li><b>Price: </b>$${cryptoSearchResponse.price}</li><li><b>Day High: </b>${cryptoSearchResponse.high_24h}<li><li><b>Day Low: </b>${cryptoSearchResponse.low_24h}</li></ul>
                        </div>
                        <div class='col s6'>
                          <ul><li><b>Hourly Change: </b>$${cryptoSearchResponse.delta_1h}</li><li><b>Daily Change: </b>${cryptoSearchResponse.delta_24h}<li><li><b>Weekly Change: </b>${cryptoSearchResponse.delta_7d}</li></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-action"><a href="#">View report</a></div>
                </div>
              </div>`);
    
    
          });
          var stock = data.stocks.stocks;
          console.log(stock);
  var stockAPI = '73cdYy54IDQYfiqTXJ3tjQobUdFErpCqhd74BdZERF6rLfclhO5ubZeoVv9O';
  var searchURL =
    "https://api.worldtradingdata.com/api/v1/stock?symbol=" + stock + "&api_token=" + stockAPI;

  $.ajax({
    url: searchURL,
    method: "GET"
  }).then(function (info) {
    console.log(info);

    var favrow = $('.fav-cards-row');

    favrow.append(`
    <div class="col s12 m6 mb-1">
      <div class="card">
        <div class="card-content valign-wrapper">
          <div class="card-text">
            <span class="card-title">${info.data[0].name}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red remove-stock"><i class="material-icons">remove</i></a>
            <div class='row'>
              <div class='col s6'>
                <ul><li><b>Price: </b>$${info.data[0].price}</li><li><b>Day High: </b>$${info.data[0].day_high}<li><li><b>Day Low: </b>$${info.data[0].day_low}</li></ul>
              </div>
              <div class='col s6'>
                <ul><li><b>Day Change: </b>$ ${info.data[0].day_change}</li><li><b>Change Percent: </b>${info.data[0].change_pct}%<li></ul>
              </div>
            </div>
            <i>Chart Here</i>
          </div>
        </div>
        <div class="card-action"><a href="#">View report</a></div>
      </div>
    </div>`);
  });
        }
    
        // ...
      )
      // User is signed in.
    } else {
      // No user is signed in.
    }
    
  })
 
}

// WORLD TRADE DATA API - Stocks Page
function renderStockRates() {
  $('.stock-cards-row').empty();

  var stockAPI = '73cdYy54IDQYfiqTXJ3tjQobUdFErpCqhd74BdZERF6rLfclhO5ubZeoVv9O';
  var stockInfo =
      "https://api.worldtradingdata.com/api/v1/stock?symbol=MSFT,SNAP,TWTR,VOD.L&api_token=" + stockAPI;

  $.ajax({
    url: stockInfo,
    method: "GET"
  }).then(function (info) {
    console.log(info);

    for (var i = 0; i < info.data.length; i++) {
      var stocksRow = $('.stock-cards-row');

      stocksRow.append(`
    <div class="col s12 m6 mb-1" id="${info.data[i].symbol}">
      <div class="card">
        <div class="card-content valign-wrapper">
          <div class="card-text">
            <span class="card-title">${info.data[i].name}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red add-stock"><i class="material-icons">add</i></a>
            <div class='row'>
              <div class='col s6'>
                <ul><li><b>Price: </b>$${info.data[i].price}</li><li><b>Day High: </b>$${info.data[i].day_high}<li><li><b>Day Low: </b>$${info.data[i].day_low}</li></ul>
              </div>
              <div class='col s6'>
                <ul><li><b>Day Change: </b>$ ${info.data[i].day_change}</li><li><b>Change Percent: </b>${info.data[i].change_pct}%<li></ul>
              </div>
            </div>
            <i>Chart Here</i>
          </div>
        </div>
        <div class="card-action"><a href="#">View report</a></div>
      </div>
    </div>`);
    }
  })
}

// WORLD TRADE DATA API: Searching and adding stocks
$("#stocks-submit").on("click", function () {
  var searchTicker = $("#stocks-search").val().trim();
  var stockAPI = '73cdYy54IDQYfiqTXJ3tjQobUdFErpCqhd74BdZERF6rLfclhO5ubZeoVv9O';
  var searchURL =
    "https://api.worldtradingdata.com/api/v1/stock?symbol=" + searchTicker + "&api_token=" + stockAPI;

  $.ajax({
    url: searchURL,
    method: "GET"
  }).then(function (search) {
    console.log(search);

    var newStock = $('.stock-cards-row');

    newStock.prepend(`
      <div class="col s12 m6 mb-1" id="${search.data[i].name}">
        <div class="card">
          <div class="card-content valign-wrapper">
            <div class="card-text">
              <span class="card-title">${search.data[0].name}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red add-stock"><i class="material-icons">add</i></a>
              <div class='row'>
                <div class='col s6'>
                  <ul><li><b>Price: </b>$${search.data[0].price}</li><li><b>Day High: </b>$${search.data[0].day_high}<li><li><b>Day Low: </b>$${search.data[0].day_low}</li></ul>
                </div>
                <div class='col s6'>
                  <ul><li><b>Day Change: </b>$ ${search.data[0].day_change}</li><li><b>Change Percent: </b>${search.data[0].change_pct}%<li></ul>
                </div>
              </div>
              <i>Chart Here</i>
            </div>
          </div>
          <div class="card-action"><a href="#">View report</a></div>
        </div>
      </div>`);
  });
})
