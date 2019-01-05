'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const log = await Product.find({
        active: true
    }, 'title price slug');

    return log;
}

exports.getBySlug = async (slug) => {
    const log = await Product.find({
        slug: slug,
        active: true
    }, 'title slug price tags description');
    return log;
}

exports.getByTag = async (tag) => {
    const log = await Product.find({
        tags: tag,
        active: true
    }, 'title slug price tags description');
    return log;
}

exports.getById = async (id) => {
    const log = await Product.findById(id, 'title slug price tags description active');
    return log;
}

exports.create = async (data) => {
    const product = new Product(data);
    // Study Async / Await

    await product.save();
}

exports.update = async (id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price
        }
    });
}

exports.delete = async (id) => {
    await Product.findOneAndRemove(id);
}