var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var user = require('./api/user');
const port = 3000;

if (process.env.NODE_ENV !== 'test'){
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', user);
app.use('/photo', photo);
app.use('/users', user);


//테스트 코드 만들고 비즈니스 로직을 만들자ㅏ ...
module.exports = app;