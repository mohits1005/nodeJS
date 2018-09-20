var mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

var Todo = mongoose.model('Todo',{
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});
var date = new Date();
var newTodo = new Todo({
    text: 'Cut Vegetables',
    completed: true,
    completedAt: date.getTime()
});

newTodo.save().then((doc) => {
    console.log('Saved todo',doc);
}, (e) => {
    console.log('Unable to save todo');
});
