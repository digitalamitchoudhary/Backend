
const express = require("express");
const { create, view, update } = require("../../Controllers/backend/categories.controllers");

const server = express.Router();
const category = require('../../Controllers/backend/categories.controllers')



module.exports = app => {



    server.post('/add',create) 
    
    server.get('/',view) 
    server.get('/Update', category.update)  
    
    server.delete('/Delete',category.delete)

    app.use('/api/backend/categories',server)
}