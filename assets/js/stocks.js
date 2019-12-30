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

// msftChart();

// // Microsoft Stock function
// function msftChart() {
//   msftInfo();
//   var msftQueryURL =
//     "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=TTJMFECFAT8Y4P9E";

//   $.ajax({
//     url: msftQueryURL,
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

// function msftInfo() {
//   var msftStockURL =
//     "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=TTJMFECFAT8Y4P9E";

//   $.ajax({
//     url: msftStockURL,
//     method: "GET"
//   }).then(function(msftInfo) {
//     // Bracket notation to get ticker
//     var stockName = msftInfo["Global Quote"]["01. symbol"];
//     var stockTitle = $("<h5>").text(stockName);

//     // Bracket notation to get current value
//     var stockValue = msftInfo["Global Quote"]["05. price"];
//     var valueTitle = $("<p>").text(stockValue + "USD");

//     // Bracket notation to get percent change
//     var percChange = msftInfo["Global Quote"]["10. change percent"];
//     var percTitle = $("<p>").text(percChange);

//     //   Stock Title
//     $("#msft-card-title").append(stockTitle, valueTitle, percTitle);
//   });
// }

// // Google Stock function
// googlChart();

// function googlChart() {
//   googlInfo();
//   var googlQueryURL =
//     "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOGL&interval=5min&apikey=TTJMFECFAT8Y4P9E";

//   $.ajax({
//     url: googlQueryURL,
//     method: "GET"
//   }).then(function(googl) {
//     var timeSeries2 = googl["Time Series (5min)"];

//     var chartData = [];
//     for (var key in timeSeries2) {
//       var timeStocks = timeSeries2[key]["1. open"];

//       chartData.push({
//         x: key,
//         value: timeStocks
//       });
//     }
//     anychart.onDocumentReady(function() {
//       // data
//       data = anychart.data.set(chartData);

//       // set chart type
//       var chart2 = anychart.area();

//       // set data
//       var area2 = chart2.splineArea(data);

//       //   Delete X-axis information
//       var labels2 = chart2.xAxis().labels();
//       labels2.enabled(false);

//       // set container and draw chart
//       chart2.container("googl-stock-chart").draw();
//     });
//   });
// }

// function googlInfo() {
//   var googlStockURL =
//     "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOGL&apikey=TTJMFECFAT8Y4P9E";

//   $.ajax({
//     url: googlStockURL,
//     method: "GET"
//   }).then(function(googlInfo) {
//     // Bracket notation to get ticker
//     var stockName = googlInfo["Global Quote"]["01. symbol"];
//     var stockTitle = $("<h5>").text(stockName);

//     // Bracket notation to get current value
//     var stockValue = googlInfo["Global Quote"]["05. price"];
//     var valueTitle = $("<p>").text(stockValue + "USD");

//     // Bracket notation to get percent change
//     var percChange = googlInfo["Global Quote"]["10. change percent"];
//     var percTitle = $("<p>").text(percChange);

//     //   Stock Title
//     $("#googl-card-title").append(stockTitle, valueTitle, percTitle);
//   });
// }

// // Verizon Stock function
// vzChart();

// function vzChart() {
//   vzInfo();
//   var vzQueryURL =
//     "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=VZ&interval=5min&apikey=K2SXCCKWX3DOOWN4";

//   $.ajax({
//     url: vzQueryURL,
//     method: "GET"
//   }).then(function(vz) {
//     // First JSON object
//     var timeSeries3 = vz["Time Series (5min)"];

//     var chartData = [];
//     for (var key in timeSeries3) {
//       var timeStocks = timeSeries3[key]["1. open"];

//       chartData.push({
//         x: key,
//         value: timeStocks
//       });
//     }
//     anychart.onDocumentReady(function() {
//       // data
//       data = anychart.data.set(chartData);

//       // set chart type
//       var chart3 = anychart.area();

//       // set data
//       var area3 = chart3.splineArea(data);

//       //   Delete X-axis information
//       var labels3 = chart3.xAxis().labels();
//       labels3.enabled(false);

//       // set container and draw chart
//       chart3.container("vz-stock-chart").draw();
//     });
//   });
// }

// function vzInfo() {
//   var vzStockURL =
//     "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=VZ&apikey=K2SXCCKWX3DOOWN4";

//   $.ajax({
//     url: vzStockURL,
//     method: "GET"
//   }).then(function(vzInfo) {
//     console.log(vzInfo);

//     // Bracket notation to get ticker
//     var stockName = vzInfo["Global Quote"]["01. symbol"];
//     var stockTitle = $("<h5>").text(stockName);

//     // Bracket notation to get current value
//     var stockValue = vzInfo["Global Quote"]["05. price"];
//     var valueTitle = $("<p>").text(stockValue + "USD");

//     // Bracket notation to get percent change
//     var percChange = vzInfo["Global Quote"]["10. change percent"];
//     var percTitle = $("<p>").text(percChange);

//     //   Stock Title
//     $("#vz-card-title").append(stockTitle, valueTitle, percTitle);
//   });
// }

// Searching Stock and Populating Div - Stock Trends 

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

// Step 1: Create function to search for stock tickers
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

