const dbConnection = require('../../../database');



exports.create = async(req,res)=>{

const db = await dbConnection();

const category = db.collection("categories");


// const result = await db.collection("categories").insertOne();
// when data use same key in database and send body query****
// const result = await category.insertOne(req.body); 


// when data use different key in database and send body query****


// when insert one data ***
// const obj =
// {
//     name: req.body.category_name,
//     image : req.body.category_image,
//   }
// const result = await category.insertOne(obj);

// when insert many data ***
const obj =
[{
    name: req.body.category_name,
    image : req.body.category_image,
  },
  {
    name: req.body.category_name,
    image : req.body.category_image,
  }]
const result = await category.insertMany(obj);

    var data = {

        status : true,
        msg : "Record Created Successfully",
        data: result

    }
    res.send(data)
}


exports.view = async(req,res)=>{    
    

    const db = await dbConnection();

    const result = await db.collection("categories").find().toArray();
    console.log(result)

    var data = {

        status : true,
        msg : "Record View Successfully",
        data: result

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