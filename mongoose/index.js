const express = require("express")
const server = express();

const mongoose = require('mongoose');

 

mongoose.connect('mongodb://127.0.0.1:27017/firstproject')
  .then(() => console.log('Connected!'));

  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 
server.get('/',async(req,res)=>
{


    const schema = new mongoose.Schema({

        name : String,
        image :  String
    })

    const categoryModel = new mongoose.model('categories', schema)



    let data = new categoryModel({

        name : 'all clothes',
        image :  '1.jpg'
    })
    
    let result = await data.save();
    res.send(result);
})


server.listen('2025', ()=>{
    console.log ('server working')
});