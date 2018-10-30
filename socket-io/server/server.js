const path = require('path');
const http = require('http');
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public');
// console.log(__dirname + '/../public');
// console.log(publicPath);
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected.');

    // socket.emit('newEmail', {
    //     from: 'moh@example.com',
    //     text: 'Hey. What is going on.',
    //     createdAt: 123
    // });

    // socket.emit('newMessage', {
    //     from: 'moh@example.com',
    //     text: 'Hey. What is going on.',
    //     createdAt: 123
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to chat app',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
        socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected.');
    })
});

app.get('/', (req, res) => {
    res.render('index');
});
server.listen(port, () => {
    console.log(`Started on port ${port}`);
});