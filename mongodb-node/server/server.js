var mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
var date = new Date();
var newTodo = new Todo({
    text: '   Edit this video        ',
    completed: true,
    completedAt: date.getTime()
});

newTodo.save().then((doc) => {
    console.log('Saved todo',doc);
}, (e) => {
    console.log('Unable to save todo');
});
