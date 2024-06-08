const {model, Schema, default: mongoose} = require('mongoose');

const addressSchema = new Schema({
    street:{
        type: String,
        required: true
    },
    building:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    pin:{
        type: Number,
        required: true
    },
    city:{
        type: String, 
        required: true
    },
    state:{
        type: String,
        required: true
    },
    uId:{
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const addressModel = model('addresses', addressSchema);

module.exports = addressModel;