const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    number:[{
        type: Number,
        required: true
    }],
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addresses'
    }],

    cardNumber:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cards'
    }],
    order:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
    }],
    wishlist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'wishlists'
    }]

}, { timestamps: true})

const userModel = model('users', userSchema);

module.exports = userModel