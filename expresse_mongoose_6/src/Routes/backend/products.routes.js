
const express = require("express");

const server = express.Router();




module.exports = app => {



    server.post('/add',(req,res)=>{

        var data = {
    
            status : true,
            msg : "Record Created Successfully",
            data: ""
    
        }
        res.send(data)
    }) 
    
    server.get('/view',(req,res)=>{    
    
        var data = {
    
            status : true,
            msg : "Record View Successfully",
            data: ""
    
        }
        res.send(data)
    }) 
    server.get('/Update',(req,res)=>{    
    
        var data = {
    
            status : true,
            msg : "Record Update Successfully",
            data: ""
    
        }
        res.send(data)
    }) 
    
    server.delete('/Delete',(req,res)=>{
    
        var data = {
    
            status : true,
            msg : "Record Delete Successfully",
            data: ""
    
        }
        res.send(data)
    })

    app.use('/api/backend/products',server)
}