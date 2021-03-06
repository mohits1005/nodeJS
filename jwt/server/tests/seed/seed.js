const { Todo } = require('./../../models/todo');
const { ObjectID } = require('mongodb');
var { User } = require('./../../models/user');
const jwt = require('jsonwebtoken');


const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    _creator: userOneId
}, {
    _id: new ObjectID,
    text: 'Second test todo',
    completed: true,
    completedAt: 12345,
    _creator: userTwoId
}];

const users = [{
    _id: userOneId,
    email: 'moh@mail.in',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'mohit123@mail.in',
    password: 'userTwoPass'
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
};