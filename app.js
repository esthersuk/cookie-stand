'use strict';
//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//masterarray holds all 5 store objects
var samsShop = [];
//declaringavariable called samsShop and rendering to the DOM
var theTable = document.getElementById('shops');
function getSum(total,num){
  return total + num;
}
//CONSTRUCTOR FUNCTION
function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  //arrays to hold our individual store's data
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookiesSold = 0;
  this.getCookiesSold();
  // this.randomCustomersPerHour();
  // this.randomCookiesPerHour();
  samsShop.push(this);
  this.render();
}
//Methods
Store.prototype.calcCustomersPerHour = function(){
  for(var i = 0; i < hours.length; i++){
    var push = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    console.log(push);
    this.customersPerHour.push(push);
  }
};
Store.prototype.getCookiesSold = function(){
  this.calcCustomersPerHour();
  for(var i = 0; i < hours.length; i++) {
    var cookies = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer);
    this.cookiesPerHour.push(cookies);
    this.totalDailyCookiesSold += cookies; //hourly sales added to the total sales
  }
  // function renderAllStores() {
  //   header();
  //   for(var i = 0; i < hours.length; i++) {
  //     samsShop[i].getCookiesSold();
  //     samsShop[i].render();
  //   }
  // }
  // return this.hourlySales;
};
// function randCust(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function renderAllStores() {
//   for(var i = 0; i < salmonCookies.length; i++) {
//     salmonCookiesShop[i].calcCookiesPerHour();
//     salmonCookies[i].render();
//   }
// }

function header(){
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  tableHead.textContent = 'location';
  tableRow.appendChild(tableHead);
  // theTable.appendChild(tableRow);
  for( var i = 0; i < hours.length; i++){
    var tableHead = document.createElement('th');
    tableHead.textContent = hours[i];
    tableRow.appendChild(tableHead);
  }
  var tableHead = document.createElement('th');
  tableHead.textContent = 'Totals';
  tableRow.appendChild(tableHead);
  theTable.appendChild(tableRow);
}
Store.prototype.render = function() {
  var tableRowEl = document.createElement('tr');
  var tableDataEl = document.createElement('td');
  tableDataEl.textContent = this.location;
  tableRowEl.appendChild(tableDataEl);
  for(var i = 0; i < hours.length; i++){
    tableDataEl = document.createElement('td');
    tableDataEl.textContent = this.cookiesPerHour[i];
    tableRowEl.appendChild(tableDataEl);
  }
  tableDataEl = document.createElement('td');
  tableDataEl.textContent = this.totalDailyCookiesSold;
  tableRowEl.appendChild(tableDataEl);
  theTable.appendChild(tableRowEl);
};
function handleSubmission(event){
  event.preventDefault();
  var locaInput = event.target.loca.value;
  var minInput = event.target.minc.value;
  var maxInput = event.target.maxc.value;
  var avgCookies = event.target.avgc.value;
  new Store(locaInput,minInput,maxInput,avgCookies);
  event.target.loca.value = null;
  event.target.minc.value = null;
  event.target.maxc.value = null;
  event.target.avgc.value = null;
}
header();
var pikePlaceMkt = new Store('Pike Place Market', 23, 65, 6.3);
var seaTacAirport = new Store( 'SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store( 'Seattle Center', 11, 38, 3.7);
var capitolHill = new Store( 'Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 3, 24, 1.2);

newLocations.addEventListener('submit', handleSubmission);

// pikePlaceMkt.getCookiesSold ();
// seaTacAirport.getCookiesSold ();
// seattleCenter.getCookiesSold ();
// capitolHill.getCookiesSold ();
// alki.getCookiesSold ();
// header();
// }
//makeFooterRow();

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// function getSum(total,num){
//   return total + num;
// }
// var pikePlaceMkt = {
//   location: 'Pike Place Market',
//   minCustomersPerHour: 23,
//   maxCustomerPerHour: 65,
//   avgCookiesperCustomer: 6.3,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random customers at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for(var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       console.log(this.randomCustomersPerHour[i]);
//     }
// },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i ++) {
//       console.log('Hello');
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalCookiesPerHour.reduce(getSum);
//   },
// };
// pikePlaceMkt.calcCustomersPerHour ();
// pikePlaceMkt.calcCookiesPerHour ();
//
// pikePlaceMkt.render();
// //end of pikePlaceMkt
// var SeaTac = {
//   location: 'SeaTac Airport',
//   minCustomersPerHour: 3,
//   maxCustomerPerHour: 24,
//   avgCookiesperCustomer: 1.2,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random customers at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       console.log(this.randomCustomersPerHour[i]);
//     }
//   },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName2');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i ++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total' + ':' + this.totalDailySales;
//   }
// };
// SeaTac.calcCustomersPerHour ();
// SeaTac.calcCookiesPerHour ();
//
// SeaTac.render();
// //end of SeaTac
// var SeattleCenter = {
//   location: 'Seattle Center',
//   minCustomersPerHour: 11,
//   maxCustomerPerHour: 38,
//   avgCookiesperCustomer: 3.7,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random customers at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       console.log(this.randomCustomersPerHour[i]);
//     }
//   },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName3');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i ++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total' + ':' + this.totalDailySales;
//   }
// };
// SeattleCenter.calcCustomersPerHour ();
// SeattleCenter.calcCookiesPerHour ();
//
// SeattleCenter.render();
// //end of SeattleCenter
// var CapitolHill = {
//   location: 'Capitol Hill',
//   minCustomersPerHour: 20,
//   maxCustomerPerHour: 38,
//   avgCookiesperCustomer: 2.3,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random customers at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       console.log(this.randomCustomersPerHour[i]);
//     }
//   },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName4');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i ++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total' + ':' + this.totalDailySales;
//   }
// };
// CapitolHill.calcCustomersPerHour ();
// CapitolHill.calcCookiesPerHour ();
//
// CapitolHill.render();
// //CapitolHill
// var Alki = {
//   location: 'Alki',
//   minCustomersPerHour: 2,
//   maxCustomerPerHour: 16,
//   avgCookiesperCustomer: 4.6,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random customers at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       console.log(this.randomCustomersPerHour[i]);
//     }
//   },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName5');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i ++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total' + ':' + this.totalDailySales;
//   }
// };
// Alki.calcCustomersPerHour ();
// Alki.calcCookiesPerHour ();
//
// Alki.render();
