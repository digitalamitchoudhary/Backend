
const express = require("express");
const { create, view, update } = require("../../Controllers/backend/categories.controllers");

const server = express.Router();
const category = require('../../Controllers/backend/categories.controllers')



module.exports = app => {



    server.post('/add',create) 
    
    server.get('/',view) 
    server.put('/update', category.update)  

    // special case delete by id
    
    // server.delete('/delete/:id',category.delete)
    server.delete('/delete/:name',category.delete)

    
    // server.delete('/delete',category.delete)

    app.use('/api/backend/categories',server)
}