'use stict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function getSum(total,num){
  return total + num;
}
var pikePlaceMkt = {
  location: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesperCustomer: 6.3,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random customers at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for(var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
},
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);

    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i ++) {
      console.log('Hello');
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalCookiesPerHour.reduce(getSum);
  },
};
pikePlaceMkt.calcCustomersPerHour ();
pikePlaceMkt.calcCookiesPerHour ();

pikePlaceMkt.render();
//end of pikePlaceMkt
var SeaTac = {
  location: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesperCustomer: 1.2,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random customers at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);

    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName2');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i ++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total' + ':' + this.totalDailySales;
  }
};
SeaTac.calcCustomersPerHour ();
SeaTac.calcCookiesPerHour ();

SeaTac.render();
//end of SeaTac
var SeattleCenter = {
  location: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesperCustomer: 3.7,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random customers at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);

    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName3');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i ++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total' + ':' + this.totalDailySales;
  }
};
SeattleCenter.calcCustomersPerHour ();
SeattleCenter.calcCookiesPerHour ();

SeattleCenter.render();
//end of SeattleCenter
var CapitolHill = {
  location: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesperCustomer: 2.3,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random customers at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName4');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i ++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total' + ':' + this.totalDailySales;
  }
};
CapitolHill.calcCustomersPerHour ();
CapitolHill.calcCookiesPerHour ();

CapitolHill.render();
//CapitolHill
var Alki = {
  location: 'Alki',
  minCustomersPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesperCustomer: 4.6,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random customers at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      console.log(this.randomCustomersPerHour[i]);
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.avgCookiesperCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);

    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName5');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i ++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total' + ':' + this.totalDailySales;
  }
};
Alki.calcCustomersPerHour ();
Alki.calcCookiesPerHour ();

Alki.render();
