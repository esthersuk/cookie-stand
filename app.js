'use stict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var samsShop = [];
var theTable = document.getElementById('samsShopTable');

// function randCust(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

function renderAllStores() {
  for(var i = 0; i < samsShop.length; i++) {
    samsShop[i].calcCookiesPerHour();
    samsShop[i].render();
  }
}

function header(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}

function Shop(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalDailySales = 0; //PR
  this.randomCustomersPerHour = [];
  this.totalCookiesPerHour = []; //PR
  // this.calcCookiesThisHour = function() {};
  // this.custPerHour();
  // this.calcCookiesPerHour();
  samsShop.push(this);
}

Shop.prototype.custPerHour = function(){
  // var ref = [];
  for (var i = 0; i < hours.length; i++) {
    var push = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    console.log(push);
    this.randomCustomersPerHour.push(push);
  }
};

Shop.prototype.calcCookiesPerHour = function(){
  // var pushTwo = [];
  this.custPerHour();
  for (var i = 0; i < hours.length; i++) {
    var pushTwo = Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer);
    console.log(pushTwo);
    this.totalCookiesPerHour.push(pushTwo);
    // this.totalDailySales += this.totalCookiesPerHour[i];  // SO IMPORTANT TO UNDERSTAND WHY THIS IS HERE
    this.totalDailySales += pushTwo;
  }
};

Shop.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);
  theTable.appendChild(trEl);
};

new Shop ('Pike Place Market', 23, 65, 6.3);
new Shop ('SeaTac Airport', 3, 24, 1.2);
new Shop ('Seattle Center', 11, 38, 3.7);
new Shop ('Capitol Hill', 11, 38, 3.7);
new Shop ('Alki', 2, 16, 4.6);

header();
renderAllStores();

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
