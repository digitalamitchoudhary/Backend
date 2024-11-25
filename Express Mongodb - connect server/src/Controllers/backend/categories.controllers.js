exports.create = (req,res)=>{

    var data = {

        status : true,
        msg : "Record Created Successfully",
        data: ""

    }
    res.send(data)
}


exports.view =(req,res)=>{    
    
    var data = {

        status : true,
        msg : "Record View Successfully",
        data: ""

    }
    res.send(data)
}
exports.update =(req,res)=>{    
    
    var data = {

        status : true,
        msg : "Record Update Successfully",
        data: ""

    }
    res.send(data)
}

exports.delete =(req,res)=>{
    
    var data = {

        status : true,
        msg : "Record Delete Successfully",
        data: ""

    }
    res.send(data)
}