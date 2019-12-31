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

renderFavorites()


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
  var stockAPI = '73cdYy54IDQYfiqTXJ3tjQobUdFErpCqhd74BdZERF6rLfclhO5ubZeoVv9O';
  var stockInfo =
      "https://api.worldtradingdata.com/api/v1/stock?symbol=GOOGL,APPL,AMZN,BABA,VZ&api_token=" + stockAPI;

  $.ajax({
    url: stockInfo,
    method: "GET"
  }).then(function (info) {
    console.log(info);

    for (var i = 0; i < info.data.length; i++) {
      var stocksRow = $('.fav-cards-row');

      stocksRow.append(`
    <div class="col s12 m6 mb-1">
      <div class="card">
        <div class="card-content valign-wrapper">
          <div class="card-text">
            <span class="card-title">${info.data[i].name}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red add-favorite"><i class="material-icons">add</i></a>
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

// WORLD TRADE DATA API - Stocks Page
function renderStockRates() {
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
    <div class="col s12 m6 mb-1">
      <div class="card">
        <div class="card-content valign-wrapper">
          <div class="card-text">
            <span class="card-title">${info.data[i].name}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red add-favorite"><i class="material-icons">add</i></a>
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
      <div class="col s12 m6 mb-1">
        <div class="card">
          <div class="card-content valign-wrapper">
            <div class="card-text">
              <span class="card-title">${search.data[0].name}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red add-favorite"><i class="material-icons">add</i></a>
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

