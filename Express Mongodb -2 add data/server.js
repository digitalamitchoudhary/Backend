const express = require("express");
const server = express();
const dbConnection = require('./database');
const cros = require('cros');

server.use(express.json());
server.use(code)
server.use(cros())
server.get('/',(req,res)=>{

    res.send("sns")
})

require('./src/Routes/backend/categories.routes')(server);
require('./src/Routes/backend/products.routes')(server);

server.listen("2024", ()=>{console.log('server working')});