const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    title:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    totalCount:{
        type: Number,
        required: true
    },
    bg:{
        type: String,
        required: true
    }
}, { timestamps: true})

const categoryModel = model('Productcategories', categorySchema);

module.exports = categoryModel