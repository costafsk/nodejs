'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({active:true}, 'title slug price').then(
        data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    Product.find({
        slug: req.params.slug,
        active: true
    }, 'title slug price tags description').then(
        data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
    });
};

exports.getByTag = (req, res, next) => {
    Product.find({
        tags: req.params.tag,
        active: true
    }, 'title slug price tags description').then(
        data => {
            res.status(200).send(data);
        }).catch(e => {
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) => {
    Product.findById(req.params.id, 'title slug price tags description active').then(
        data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
    });
}

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
    Product.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    }).then(status => {
        res.status(200).send({message: 'product successfully updated'});
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.delete = (req, res, next) => {
    Product.findOneAndRemove(req.params.id).then(status => {
        res.status(200).send({
            message: 'product successfully removed'
        });
    }).catch(e => {
        res.status(400).send(e);
    });
};
