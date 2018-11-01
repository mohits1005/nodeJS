// var date = new Date();
// console.log(date.getMonth());
var moment = require('moment');
var date = moment();
// date.add(1, 'years');
// date.subtract(9, 'months');
// console.log(date.format('MMM Do YYYY'));
// console.log(date.format('LT'));
console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);