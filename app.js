var express = require('express');
var chalk = require('chalk');
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');
var app = express();
const routes = require('./routes');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/', routes);

/*const special = express.Router();

app.use('/special', special);

special.use('/', function(req, res, next) {
  console.log('You have reached the special area');
  next();
});

special.get('/cake', function(req, res, next) {
  res.send('This is a special birthday cake');
});*/

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
