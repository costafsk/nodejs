'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.post = (req, res, next) => {
    const product = new Product(req.body);
    // Study Async / Await

    product.save().then(Successlog => {
        res.status(201).send({message: 'Product Created Succesfully'});
    }).catch(erorLog => {
        res.status(400).send({message:'BAD REQUEST BRO, PRODUCT WAS NOT CREATED', data: e})
    })
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id:id, 
        item:req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
