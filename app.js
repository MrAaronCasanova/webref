var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

var url = process.env.DATABASEURL || 'mongodb://localhost/webref';
mongoose.connect(url);
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

var port = process.env.PORT || 3000;

app.listen(port, process.env.IP, function () {
  console.log('Server started on port 3000');
});
