// Setup the Express Server
var express = require('express'),
  app = express();

// Config for the app directory
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/app'));
});

// Let us know everything is working
app.listen(3000);
console.log('Server fired on localhost:3000');
