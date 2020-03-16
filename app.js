var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var dotenv = require('dotenv');
var person = require('./routes/person');
var bodyParser = require('body-parser');
var auth = require('./middleware/auth');

var app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/',auth.checkAuth,person);


var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(port + " is a magic port!");
});
module.exports = app;