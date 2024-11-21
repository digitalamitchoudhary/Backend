const express = require("express");
const server = express();

const validation = require('./middleware');

server.get('/',(req,res)=>{

    res.send("sns")
})

const route = express.Router();


route.use(validation)

server.post('/add-category',validation,(req,res)=>{

    var data = {

        status : true,
        msg : "Record Created Successfully",
        data: ""

    }
    res.send(data)
}) // ************************************Application middleware************************************************************************//

// server.get('/view-category',(req,res)=>{

//     var data = {

//         status : true,
//         msg : "Record View Successfully",
//         data: ""

//     }
//     res.send(data)
// }) 1st code


// server.get('/view-category',(req,res)=>{


//     if (req.query.key=='') {

//         var data = {

//             status : false,
//             msg : "Record key missing Successfully",
//             data: ""
    
//         }

//     } else if  (req.query.key !=='123456789')  { 
        
//         var data = {

//             status : false,
//             msg : "Record key  miss match Successfully",
//             data: ""
    
//         }



//     } else {
//         var data = {

//             status : true,
//             msg : "Record View Successfully",
//             data: ""
    
//         }
        
//     }

   
//     res.send(data)
// })  second code

server.get('/view-category',validation,(req,res)=>{    

        var data = {
    
            status : true,
            msg : "Record View Successfully",
            data: ""
    
        }
        res.send(data)
    })  //************************************Application middleware************************************************************************//


// server.put('/update-category',(req,res)=>{

//     var data = {

//         status : true,
//         msg : "Record Update Successfully",
//         data: ""

//     }
//     res.send(data)
// })
route.get('/update-category',(req,res)=>{

    var data = {

        status : true,
        msg : "Record Update Successfully",
        data: ""

    }
    res.send(data)
})
 // ************************************routing middleware************************************************************************//
server.delete('/Delete-category',(req,res)=>{

    var data = {

        status : true,
        msg : "Record Delete Successfully",
        data: ""

    }
    res.send(data)
})



server.use('/',route);




server.listen("2024")