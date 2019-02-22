// server.js
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
var redis = require("redis");


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
        connection.db.collection("Todos", function (err, collection) {
            collection.find({}).toArray(function (err, data) {
                res.send(data);
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
            if (element.child === undefined)
                element.child = [];
            element.child.forEach(function (inElement) {
                module_ids.push(inElement.module_id);
            })
        });
        return new Promise((resolve, reject) => {
            TrackModule.find({ 'module_id': { '$in': module_ids}}).then((track_modules) => {
                var status = 1;
                resolve(track_modules);
            }, (e) => {
                reject(e);
            });
        })
    }
    const getTrackData = async(name) => {
        const track = await findTrack(name);
        var module_ids = [];
        track.modules.forEach(function (element) {
            module_ids.push(element.module_id);
            if (element.child === undefined)
                element.child = [];
            element.child.forEach(function (inElement) {
                module_ids.push(inElement.module_id);
            })
        });
        const track_modules = await findTrackModules(track);
        const status = 1;
        return { status, track, module_ids, track_modules };
    };
    getTrackData(name).then((data) => {
        res.send(data);
    }).catch((errorMessage) => {
        res.send(errorMessage);
    });
    // findTrack(name).then((track) => {
    //     return findTrackModules(track);
    // }).then((data) => {
    //     res.send(data);
    // }).catch((errorMessage) => {
    //     res.send(errorMessage);
    // });
});
app.get('/me', authenticate, (req, res) => {
    res.send("Success");
});
app.get('/token', (req, res) => {
    var token = {};
    //post params
    var userData = {}
    //post params end
    //header params
    var referer = req.header('Referer');
    //header params end
    //global variables
    var hosted_zone = '';
    var g_audience_map = {};
    var g_redis_expirey = 3 * 86400;
    //global variables end
    var uid = userData.uid;
    var usr = userData.usr === undefined ? 'New User' : userData.usr;
    var usr_type = userData.usr_type === undefined ? '1' : userData.usr_type;
    var email = userData.email;
    var verified = userData.verified === undefined ? 0 : userData.verified;
    var device_density = userData.device_density === undefined ? 'hdpi' : userData.device_density;
    var platform_type = userData.platform;
    var acl_batches = userData.acl_batches === undefined ? '' : userData.acl_batches;
    var creator_tracks = userData.creator_tracks === undefined ? '' : userData.creator_tracks;
    var client_ids = userData.client_ids === undefined ? '' : userData.client_ids;
    var audience = g_audience_map[platform_type];
    var g_redis_token_prefix = "";
    var date = new Date();
    var time = date.getTime();
    var token_key = g_redis_token_prefix + uid + "_" + platform_type + "_" + time;
    var tokenData = {
        'iss': referer,
        'aud': audience,
        'jti': token_key,
        'iat': time,
        'nbf': time,
        'exp': time+g_redis_expirey,
        'uid': uid,
        'usr': usr,
        'usr_type': usr_type,
        'email': email,
        'verified': verified,
        'device_density': device_density,
        'platform': platform_type,
        'acl_batches': acl_batches,
        'creator_tracks': creator_tracks,
        'client_ids': client_ids
    };
    var signer = '';
    token = jwt.sign(tokenData, signer);
    //save in redis
    try{
        var host = '';
        var port = 6379;
        var client = redis.createClient(port, host);
        client.set(token_key, token);
        res.send({token, token_key});
    }catch(e){
        res.status(403).send(e);
    }
    res.status(403).send('Something went wrong');
});
app.listen(3000, () => {
    console.log('Server is up on 3000')
})
