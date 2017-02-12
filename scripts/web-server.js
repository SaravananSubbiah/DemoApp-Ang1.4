var express = require('express');
var path = require('path');
var events = require('./eventsController')
var app = express();
var rootpath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 8000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootpath + '/app'));
//app.user(express.errorHandler())


app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(app.get('port'));

console.log('listening port 8000');
