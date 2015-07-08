// var express = require('express');
// var path = require('path');

// var app = express();

// //app.use(express.static(__dirname)); // Current directory is root
// app.use(express.static(path.join(__dirname, 'static'))); //  "public" off of current is root

// app.listen(8000);
// console.log('Listening on port 8000');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(8000);
