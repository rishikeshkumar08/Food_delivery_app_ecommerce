const {Schema, model, default: mongoose} = require('mongoose');

const orderSchema = new Schema({
    item: [{
        type: Object,
        required: true
    }],
    shipping:{
        type: Object,
        required: true
    },
    delivery:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    tax:{
        type: Number,
        required: true
    },
    uId:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    paymentId:{
        type: String,
    },
    delivered:{
        type: Boolean,
        default: false
    },
    isPaid:{
        type: Boolean,
        default: false
    },
    paymentMethod:{
        type: String,
        required: true
    }

}, {timestamps: true});

const orderModel = model('orders', orderSchema);

module.exports = orderModel;