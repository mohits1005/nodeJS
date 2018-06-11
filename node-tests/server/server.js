const express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'app v1.0'
    });
});

app.get('/users',(req,res) => {
    res.status(200).send([{
        name: 'moh',
        age: 25
    },
    {
        name: 'john',
        age:25
    }
    ]);
});

app.listen(3000);
module.exports.app = app;
