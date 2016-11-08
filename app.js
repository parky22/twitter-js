var express = require('express');
var chalk = require('chalk');
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');
var app = express();

/*app.use('/', function(req, res, next) {
  var method = chalk.blue(req.method);
  var path = chalk.yellow(req.path);

  console.log(method, path);
  next();
});*/

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use(volleyball);

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/', function(req, res) {
  res.render('index', {title: 'Hall of Fame', people: people});
});

app.get('/news', function(req, res) {
  res.send('Welcome to the news page');
});

const special = express.Router();

app.use('/special', special);

special.use('/', function(req, res, next) {
  console.log('You have reached the special area');
  next();
});

special.get('/cake', function(req, res, next) {
  res.send('This is a special birthday cake');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

/*var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};*/

/*nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});*/