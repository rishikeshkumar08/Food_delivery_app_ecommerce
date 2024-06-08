const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    discount:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    ratings:{
        type: Number
    }

}, { timestamps: true})

const productsModel = model('products', productsSchema);

module.exports = productsModel