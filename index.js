var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
const port = 3000


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;