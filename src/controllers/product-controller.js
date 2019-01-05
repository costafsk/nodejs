'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');

exports.get = async (req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
        
    } catch(e) {
        res.status(500).send({message:'Failed request'});
    }
};

exports.getBySlug = async (req, res, next) => {
    try {
        const data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message:'Failed request'});
    }
};

exports.getByTag = async (req, res, next) => {
    try {
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Failed request'});
    }
};

exports.getById = async (req, res, next) => {
    try { 
        const data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({message: 'Failed request'});
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({message: 'Product Created Succesfully'});
    } catch(e) {
        res.status(400).send({message:'BAD REQUEST BRO, PRODUCT WAS NOT CREATED', data: e})
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body)
        res.status(200).send({message: 'product successfully updated'});
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({message: 'product successfully removed'});
    } catch(e) {
        res.status(400).send(e);
    }
};
