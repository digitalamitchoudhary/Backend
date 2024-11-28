const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.get('/',(req,res)=>{       
    res.send('server working')
})

require('./src/Routes/backend/categories.routes')(server);
require('./src/Routes/backend/products.routes')(server);


server.get('*',(req,res)=>{
    res.send('page not find')
})




;


mongoose.connect('mongodb://127.0.0.1:27017/lms')
  .then(() => {server.listen("2026",()=>{console.log('server working')})
})
  .catch(()=>{
    console.log('Database not Connected!')
  });