var mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('', { useNewUrlParser: true });

module.exports = {
    mongoose
};
