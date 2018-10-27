const express = require('express')

const path = require('path');
const publicPath = path.join(__dirname, '../public');
// console.log(__dirname + '/../public');
// console.log(publicPath);

var app = express();
app.use(express.static(publicPath));
const port = 3000;
app.get('/', (req, res) => {
    res.render('index');
});
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});