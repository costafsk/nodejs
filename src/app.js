'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id:id, 
        item:req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;

// STATUS CODEs
// 
// 200 OK
// 201 CREATED
// 400 BAD REQUEST
// 401 NOT AUTHENTICATED
// 403 ACCESS DANIED
// 500 INTERNAL SERVER ERROR
