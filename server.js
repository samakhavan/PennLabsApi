var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Card = require('./api/models/card'), //created model loading here
  List = require('./api/models/list'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pldb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/route'); //importing route
routes(app); //register the route


app.listen(port);


console.log('pennlabs RESTful API server started on: ' + port);