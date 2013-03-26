var express = require('express'),
  app = express();

// Config
// Configuration
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/app'));
});

app.listen(3000);
console.log('Listening to your pants');
