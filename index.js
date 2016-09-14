var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/** Serve our app on root path */
app.use('/', express.static(__dirname + '/app'));

/** If any other route just throw error */
app.get('*', function(req, res) {
  res.send('<H1>Bad route</H1>');
});

/** Creating simple server */
var server = app.listen(3000);
