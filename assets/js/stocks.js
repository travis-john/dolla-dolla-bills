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

msftChart();

// Microsoft Stock function
function msftChart() {
  msftInfo();
  var msftQueryURL =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=TTJMFECFAT8Y4P9E";

  $.ajax({
    url: msftQueryURL,
    method: "GET"
  }).then(function(msft) {
    // First JSON object
    var timeSeries1 = msft["Time Series (5min)"];

    var chartData = [];
    for (var key in timeSeries1) {
      var timeStocks = timeSeries1[key]["1. open"];

      chartData.push({
        x: key,
        value: timeStocks
      });
    }
    anychart.onDocumentReady(function() {
      // data
      data = anychart.data.set(chartData);

      // set chart type
      var chart1 = anychart.area();

      // set data
      var area1 = chart1.splineArea(data);

      //   Delete X-axis information
      var labels1 = chart1.xAxis().labels();
      labels1.enabled(false);

      // set container and draw chart
      chart1.container("msft-stock-chart").draw();
    });
  });
}

function msftInfo() {
  var msftStockURL =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=TTJMFECFAT8Y4P9E";

  $.ajax({
    url: msftStockURL,
    method: "GET"
  }).then(function(msftInfo) {

    // Bracket notation to get ticker
    var stockName = msftInfo["Global Quote"]["01. symbol"];
    var stockTitle = $("<h5>").text(stockName);

    // Bracket notation to get current value
    var stockValue = msftInfo["Global Quote"]["05. price"];
    var valueTitle = $("<p>").text(stockValue + "USD");

    // Bracket notation to get percent change
    var percChange = msftInfo["Global Quote"]["10. change percent"];
    var percTitle = $("<p>").text(percChange);

    //   Stock Title
    $("#msft-card-title").append(stockTitle, valueTitle, percTitle);
  });
}

// Google Stock function
googlChart();

function googlChart() {
  googlInfo();
  var googlQueryURL =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOGL&interval=5min&apikey=TTJMFECFAT8Y4P9E";

  $.ajax({
    url: googlQueryURL,
    method: "GET"
  }).then(function(googl) {

    var timeSeries2 = googl["Time Series (5min)"];

    var chartData = [];
    for (var key in timeSeries2) {
      var timeStocks = timeSeries2[key]["1. open"];

      chartData.push({
        x: key,
        value: timeStocks
      });
    }
    anychart.onDocumentReady(function() {
      // data
      data = anychart.data.set(chartData);

      // set chart type
        var chart2 = anychart.area();

      // set data
        var area2 = chart2.splineArea(data);

      //   Delete X-axis information
        var labels2 = chart2.xAxis().labels();
        labels2.enabled(false);

      // set container and draw chart
        chart2.container("googl-stock-chart").draw();

    });
  });
}

function googlInfo() {
  var googlStockURL =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOGL&apikey=TTJMFECFAT8Y4P9E";

  $.ajax({
    url: googlStockURL,
    method: "GET"
  }).then(function(googlInfo) {

    // Bracket notation to get ticker
    var stockName = googlInfo["Global Quote"]["01. symbol"];
    var stockTitle = $("<h5>").text(stockName);

    // Bracket notation to get current value
    var stockValue = googlInfo["Global Quote"]["05. price"];
    var valueTitle = $("<p>").text(stockValue + "USD");

    // Bracket notation to get percent change
    var percChange = googlInfo["Global Quote"]["10. change percent"];
    var percTitle = $("<p>").text(percChange);

    //   Stock Title
    $("#googl-card-title").append(stockTitle, valueTitle, percTitle);
  });
}


// Verizon Stock function
vzChart();

function vzChart() {
  vzInfo();
  var vzQueryURL =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=VZ&interval=5min&apikey=K2SXCCKWX3DOOWN4";

  $.ajax({
    url: vzQueryURL,
    method: "GET"
  }).then(function(vz) {
    // First JSON object
    var timeSeries3 = vz["Time Series (5min)"];

    var chartData = [];
    for (var key in timeSeries3) {
      var timeStocks = timeSeries3[key]["1. open"];

      chartData.push({
        x: key,
        value: timeStocks
      });
    }
    anychart.onDocumentReady(function() {
      // data
      data = anychart.data.set(chartData);

      // set chart type
        var chart3 = anychart.area();
 
      // set data
        var area3 = chart3.splineArea(data);

      //   Delete X-axis information
        var labels3 = chart3.xAxis().labels();
        labels3.enabled(false);


      // set container and draw chart
        chart3.container("vz-stock-chart").draw();

    });
  });
}

function vzInfo() {
  var vzStockURL =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=VZ&apikey=K2SXCCKWX3DOOWN4";

  $.ajax({
    url: vzStockURL,
    method: "GET"
  }).then(function(vzInfo) {
    console.log(vzInfo);

    // Bracket notation to get ticker
    var stockName = vzInfo["Global Quote"]["01. symbol"];
    var stockTitle = $("<h5>").text(stockName);

    // Bracket notation to get current value
    var stockValue = vzInfo["Global Quote"]["05. price"];
    var valueTitle = $("<p>").text(stockValue + "USD");

    // Bracket notation to get percent change
    var percChange = vzInfo["Global Quote"]["10. change percent"];
    var percTitle = $("<p>").text(percChange);

    //   Stock Title
    $("#vz-card-title").append(stockTitle, valueTitle, percTitle);
  });
}


// // Amazon Stock function
// aaplChart();

// function aaplChart() {
//   aaplInfo();
//   var aaplQueryURL =
//     "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=K2SXCCKWX3DOOWN4";

//   $.ajax({
//     url: aaplQueryURL,
//     method: "GET"
//   }).then(function(aapl) {

//     // First JSON object
//     var timeSeries4 = aapl["Time Series (5min)"];

//     var chartData = [];
//     for (var key in timeSeries4) {
//       var timeStocks = timeSeries4[key]["1. open"];

//       chartData.push({
//         x: key,
//         value: timeStocks
//       });
//     }
//     anychart.onDocumentReady(function() {
//       // data
//       data = anychart.data.set(chartData);

//       // set chart type
//         var chart4 = anychart.area();

//       // set data
//         var area4 = chart4.splineArea(data);

//       //   Delete X-axis information
//         var labels4 = chart4.xAxis().labels();
//         labels4.enabled(false);

//       // set container and draw chart

//         chart4.container("aapl-stock-chart").draw();
//     });
//   });
// }

// function aaplInfo() {
//   var aaplStockURL =
//     "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=K2SXCCKWX3DOOWN4";

//   $.ajax({
//     url: aaplStockURL,
//     method: "GET"
//   }).then(function(aaplInfo) {

//     // Bracket notation to get ticker
//     var stockName = aaplInfo["Global Quote"]["01. symbol"];
//     var stockTitle = $("<h5>").text(stockName);

//     // Bracket notation to get current value
//     var stockValue = aaplInfo["Global Quote"]["05. price"];
//     var valueTitle = $("<p>").text(stockValue + "USD");

//     // Bracket notation to get percent change
//     var percChange = aaplInfo["Global Quote"]["10. change percent"];
//     var percTitle = $("<p>").text(percChange);

//     //   Stock Title
//     $("#aapl-card-title").append(stockTitle, valueTitle, percTitle);
//   });
// }

