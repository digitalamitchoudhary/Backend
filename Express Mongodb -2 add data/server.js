const express = require("express");
const server = express();
const dbConnection = require('./database');
const cors = require('cors');


server.use(express.json()); // for read json data
server.use(express.urlencoded({extended:true})); // for form encode data send to server databse
server.use(cors())
server.get('/',(req,res)=>{

    res.send("server working fine")
})

require('./src/Routes/backend/categories.routes')(server);
require('./src/Routes/backend/products.routes')(server);

server.listen("2024", ()=>{console.log('server working')});