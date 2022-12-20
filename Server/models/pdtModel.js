const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
    name:String,
    catid:String 
})

const PdtModel = mongoose.model('products', Product);

module.exports = PdtModel;