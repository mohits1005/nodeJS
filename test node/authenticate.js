var redis = require("redis");
const jwt = require('jsonwebtoken');
var authenticate = (req, res, next) => {
    try {
        host = '';
        port = 6379;
        var g_signer = "";
        client = redis.createClient(port, host);
        var token = req.header('Authorization');
        var decoded = {};
        decoded = jwt.verify(token, g_signer);
        var jti = decoded.jti;
        client.get(jti, function (err, reply) {
            reply = JSON.parse(reply)
            if (reply.token === token) {
                next();
            }
            else {
                res.status(403).send(err);
            }
        });
        client.on("error", function (err) {
            res.status(403).send(err);
        });
    }
    catch (err) {
        res.status(403).send(err);
    }
};
module.exports = {
    authenticate
};