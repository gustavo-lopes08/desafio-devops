var express = require('express');

// Constants
var PORT = 3000;
var HOST = '0.0.0.0';
var path = require('path');

// App
var app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
