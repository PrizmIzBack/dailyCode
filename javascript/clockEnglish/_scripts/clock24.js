//clock24.js
//5 Nov, 2016
"use strict";

window.onload = function () {

function showTime (){
var d = new Date();

var html = document.querySelector('.time');

var hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
var mins = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
var secs = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = [ "January","February","March","April","May","June","July","August","September","October","November","December"];

var displayClock = days[d.getDay()]+ ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + " "+ hours + ":" + mins + ":" + secs ;

html.innerHTML = displayClock;
}

setInterval(showTime, 1000);

}