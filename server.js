// install express server
const express = require('express');
const path = require('path');

const app = express();

// serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/tester'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/tester/index.html'));
});

// start the app by listening on the default port Heroku port
app.listen(process.env.port || 8080);
