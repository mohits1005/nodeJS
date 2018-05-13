console.log('Starting app.js');

const fs = require('fs');

const os = require('os');

const notes = require('./notes.js');

const _ = require('lodash');

// console.log(_.isString(true));
// console.log(_.isString('Mohit'));

var filteredArray = _.uniq(['Mohit',1,'Mohit',1,2,3,4])
console.log(filteredArray)

// var res = notes.addNote();
//
// console.log(res);
//
// var res2 = notes.addFunc(2,3);
//
// console.log(res2);

// var user = os.userInfo();

// console.log(user);

// fs.appendFile('greetings.txt','Hello '+user.username,function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });

// fs.appendFile('greetings.txt',`Hello ${user.username} ! You are ${notes.age}`,function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });
