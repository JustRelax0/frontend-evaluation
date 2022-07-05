
var express = require('express');
var path = require('path');
var app = express();

var port = '3000';

app.use(express.static(path.resolve(__dirname, "../client/main")));

app.get('/')

app.listen(port, () => {
  console.log('listening on ' + port);
})