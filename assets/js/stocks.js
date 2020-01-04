// ALPHA VANTAGE - Search Index - TO BE UPDATED
// function searchCompany() (
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

// WORLD TRADE DATA API - Favorites Page
function renderFavorites() {
  var stockAPI = 'hsnKYpZluHEuyITP94BBqxuXhVZqSvEKLKEn2poKlAjofGqzilkftnz8s2M8';
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
            <canvas id="mycanvas"></canvas>
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
  $('.stock-cards-row').empty();

  var stockAPI = 'hsnKYpZluHEuyITP94BBqxuXhVZqSvEKLKEn2poKlAjofGqzilkftnz8s2M8';
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
    <div class="col s12 m6 mb-1" id="${info.data[i].name}">
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
              <canvas id="mycanvas"></canvas>
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
  var stockAPI = 'hsnKYpZluHEuyITP94BBqxuXhVZqSvEKLKEn2poKlAjofGqzilkftnz8s2M8';
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
              <canvas id="mycanvas"></canvas>
            </div>
          </div>
          <div class="card-action"><a href="#">View report</a></div>
        </div>
      </div>`);

    renderCharts();

  });
})

// ALPHA VANTAGE + CHART.JS - Rendering and Creating Stock Charts - TO BE UPDATED
// create initial empty chart
var ctx = document.getElementById("mycanvas");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      data: [],
      borderWidth: 1,
      borderColor: '#00c0ef',
      label: 'liveCount',
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Intra-Day Stocks",
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  }
});

function renderCharts(myChart) {
  // Search Parameters to drive example data
  var searchTicker = $("#stocks-search").val().trim();
  var chartAPI = "hsnKYpZluHEuyITP94BBqxuXhVZqSvEKLKEn2poKlAjofGqzilkftnz8s2M8";
  var queryURL = "https://intraday.worldtradingdata.com/api/v1/intraday?symbol=" + searchTicker + "&range=1&interval=5&api_token=" + chartAPI;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (fact) {
    console.log(fact);
    // process your data to pull out what you plan to use to update the chart
    // e.g. new label and a new data point
    for (var i = 0; i < fact.intraday.length; i++) {

      myChart.data.datasets[0].data.push(fact.intraday[i]);

      // add new label and data point to chart's underlying data structures
      // re-render the chart
      myChart.update();
    };
  });
  // Get new data every 5 minutes
  setInterval(renderCharts, 300000);
}