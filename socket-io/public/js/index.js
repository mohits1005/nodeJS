var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: 'aku@example.com',
    //     text: 'Hey. This is Moh.'
    // });

    // socket.emit('createMessage', {
    //     from: 'moh@example.com',
    //     text: 'This is a sample message'
    // });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function(email) {
//     console.log('New email', email);
// });

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});