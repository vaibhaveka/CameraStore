const mongoose = require('mongoose');

const product = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    make:{
        type: Number,
        min: 1000,
        max: 9999,
        required: true
    }
});

module.exports = mongoose.model('product', product);



