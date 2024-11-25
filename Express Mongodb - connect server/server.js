const express = require("express");
const server = express();
const dbConnection = require('./database');

server.get('/',(req,res)=>{

    res.send("sns")
})

require('./src/Routes/backend/categories.routes')(server);
require('./src/Routes/backend/products.routes')(server);

server.listen("2024", ()=>{console.log('server working')});