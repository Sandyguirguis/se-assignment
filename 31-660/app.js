var express = require('express');
var app = express();

app.use(express.static('static'));
app.use(require('./routes/post.js'));
app.use(require('./routes/index.js'));

module.exports = app;