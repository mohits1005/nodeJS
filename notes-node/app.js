console.log('Starting app.js');

const fs = require('fs');

const os = require('os');

const notes = require('./notes.js')

var res = notes.addNote();

console.log(res);

var res2 = notes.addFunc(2,3);

console.log(res2);

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
