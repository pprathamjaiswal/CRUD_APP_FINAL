const mongoose = require('mongoose');
const { Schema } = mongoose;

const Category = new Schema({
    name: String
})

const CatModel = mongoose.model('categories', Category);

module.exports = CatModel;