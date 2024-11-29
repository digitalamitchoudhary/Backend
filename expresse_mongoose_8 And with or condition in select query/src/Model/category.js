const mongoose = require('mongoose');

const categorySchema =  new mongoose.Schema({

    name: {
        type : String,
        required : [true,'Name is Required'],
        // enum : ['men','women'], //for gender , for order status on e commerce site like inprocess
        // minLength : [2,'Must be minimum 2 Charaters'],
        // maxLength: 10,
        match : /^[a-zA-Z ']{2,50}$/

    },
    image: {
        type : String,
        required : [true,'image is Required'],
    },
    status: {
        type : Boolean,
        default : true,
    },
    order: {
        type : Number,
        default : 1,
        min : 1,
        max : 100,
    },
    created_at:  {
        type : Date,
        default : Date.now()
    },
    updated_at:{
        type : Date,
        default : Date.now()
    },
    deleted_at: {
        type : Date,
        default : ''
    },

})


const categoryModel = mongoose.model('categories',categorySchema);
module.exports = categoryModel;