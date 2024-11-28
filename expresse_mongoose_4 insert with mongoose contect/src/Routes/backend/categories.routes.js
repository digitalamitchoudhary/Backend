
const express = require("express");
const { create, view, update } = require("../../Controllers/backend/categories.controllers");

const server = express.Router();
const category = require('../../Controllers/backend/categories.controllers')



module.exports = app => {

    server.post('/add',category.create)
    
    server.get('/view',view)
    
    server.put('/update',update)
    
    server.delete('/delete',category.delete)
 

    
 

    
  

    app.use('/api/backend/categories',server)
}