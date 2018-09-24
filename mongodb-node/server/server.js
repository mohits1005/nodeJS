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

// newTodo.save().then((doc) => {
//     console.log('Saved todo',doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// User
// email - require it - trim it - set type - set minimum length of 1

var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});
var newUser = new User({
    email: 'mohit@chalkstreet.com'
});
newUser.save().then((user) => {
    console.log('Saved User',user);
}, (e) => {
    console.log('Unable to save user');
});
