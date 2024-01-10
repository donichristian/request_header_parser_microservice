// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Define a route for the '/api/whoami' endpoint using the GET method
app.get('/api/whoami', function (req, res) {
  // Retrieve the IP address of the client from the request object
  var ip = req.ip;
  
  // Retrieve the language preference of the client from the 'accept-language' header
  var language = req.headers['accept-language'];
  
  // Retrieve the software information of the client from the 'user-agent' header
  var software = req.headers['user-agent'];
  
  // Send a JSON response containing the IP address, language, and software information
  res.json({ ipaddress: ip, language: language, software: software });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});