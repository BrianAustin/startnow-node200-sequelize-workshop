const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan(dev));

app.get('/', function(req, res) {
  res.status(200).send();
});

module.exports = app;