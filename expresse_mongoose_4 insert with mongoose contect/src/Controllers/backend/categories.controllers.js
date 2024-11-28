const categoryModel = require('../../Model/category');


exports.create = async(req,res)=>{   
    
     data = new categoryModel({
        name: req.body.name,
        image: req.body.image,
        status: req.body.status,
        order: req.body.order,
        created_at: Date.now(),
        updated_at:  Date.now(),
        
        
    })
    
    var output = await data.save();

    const result =
    {
        status : true,
        message : 'Record create succesfully',
        new : output
    }
    

    res.send(result)
}

exports.view = async(req,res)=>{   
    
    const result =
    {
        status : true,
        message : 'Record create succesfully'
    }
    

    res.send(result)
}
exports.update = async(req,res)=>{   
    
    const result =
    {
        status : true,
        message : 'Record create succesfully'
    }
    

    res.send(result)
}
exports.delete = async(req,res)=>{   
    
    const result =
    {
        status : true,
        message : 'Record create succesfully'
    }
    

    res.send(result)
}