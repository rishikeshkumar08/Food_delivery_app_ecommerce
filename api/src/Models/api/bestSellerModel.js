const { Schema, model, default: mongoose } = require('mongoose');

const bestSellerSchema = new Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    totalOrders:{
        type: Number,
        required: true
    }

}, { timestamps: true})

const bestSellerModel = model('bestSellers', bestSellerSchema);

module.exports = bestSellerModel