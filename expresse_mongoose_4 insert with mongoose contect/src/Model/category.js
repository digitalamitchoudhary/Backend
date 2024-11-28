const mongoose = require('mongoose');

const categorySchema =  new mongoose.Schema({

    name: String,
    image: String,
    status: Boolean,
    order: Number,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,

})


const categoryModel = mongoose.model('categories',categorySchema);
module.exports = categoryModel;