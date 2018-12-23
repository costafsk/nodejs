'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://costafsk:costafsk0@ds047438.mlab.com:47438/apitest', { useNewUrlParser: true });

const product = require('./models/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;