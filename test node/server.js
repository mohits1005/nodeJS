// server.js
const express = require('express');
const app = express();


var { mongoose } = require('./mongoose');
var { Todo } = require('./todo');
var { Track } = require('./track');
var { TrackModule } = require('./track_module');
var { authenticate } = require('./authenticate');

app.get('/', (req, res) => {

    client = mongoose.connect('', { useNewUrlParser: true });
    var connection = mongoose.connection;
    connection.on('error', () => console.log('connection error:'));
    connection.once('open', function callback() {
        // console.log("h");
        connection.db.collection("Todos", function (err, collection) {
            collection.find({}).toArray(function (err, data) {
                res.send(data); // it will print your collection data
            })
        });
    });
})

app.get('/tracks/fetch/:name', (req, res) => {
    var name = req.params.name;
    var findTrack = (name) => {
        return new Promise((resolve, reject) => {
            Track.findOne({ 'track': name }).then((track) => {
                resolve(track);
            }, (e) => {
                reject(e);
            });
        }) 
    }
    var findTrackModules = (track) => {
        var module_ids = [];
        track.modules.forEach(function (element) {
            module_ids.push(element.module_id);
            element.child.forEach(function (inElement) {
                module_ids.push(inElement.module_id);
            })
        });
        return new Promise((resolve, reject) => {
            TrackModule.find({ 'module_id': { '$in': module_ids}}).then((track_modules) => {
                var status = 1;
                resolve({ status, track, module_ids, track_modules});
            }, (e) => {
                reject(e);
            });
        })
    }
    findTrack(name).then((track) => {
        return findTrackModules(track);
    }).then((data) => {
        res.send(data);
    }).catch((errorMessage) => {
        res.send(errorMessage);
    });
});
app.get('/me', authenticate, (req, res) => {
    res.send("Success");
});
app.listen(3000, () => {
    console.log('Server is up on 3000')
})
