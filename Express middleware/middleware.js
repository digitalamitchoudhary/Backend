module.exports = (req,res,next) => {
    if (req.query.key=='') {

        
         data = {

            status : false,
            msg : "Record key missing ",
            data: ""
    
        }

    } else if  (req.query.key !=='123456789')  { 
        
        var data = {

            status : false,
            msg : "Record key miss match  ",
            data: ""
    
        }



    } else {
       next()
        
    }

    res.send(data)
}