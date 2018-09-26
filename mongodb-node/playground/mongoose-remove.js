const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

Todo.findOneAndRemove({_id:'5bab657ad5fda95afac29cb7'}).then((result) => {
    console.log(result);
})

// Todo.findByIdAndRemove('5bab657ad5fda95afac29cb6').then((todo) => {
//     console.log(todo);
// })
