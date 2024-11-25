const { query } = require('express');
const dbConnection = require('../../../database');

const mongodb = require('mongodb');

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
    // for one result ** show first result
    // const result = await db.collection("categories").findOne();
    // get all record
    // const result = await db.collection("categories").find().toArray();

    // filter data by key 

    // const result = await db.collection("categories").find(
    //     {
    //         name : req.query.search,
    //         image : "6.jpg"
    // }
    // ).toArray();

        // for one key need in view data **example bs name key show ho api view mai
    // const result = await db.collection("categories").find(
    //     {},
    //     {
    //         projection : {
    //             name: true
    //         }

    //     }

    // ).toArray();

    // query url (http://localhost:2024/api/backend/categories?search=amit) *** isko browser m search krna h insb ko check krne k liye

    // for one key not show in view data *** nhi dikhega ab name api fetch m
    // const result = await db.collection("categories").find(
    //     {},
    //     {
    //         projection : {
    //             name: false
    //         }

    //     }

    // ).toArray();

    const result = await db.collection("categories").findOne({
        
        _id : new mongodb.ObjectId(req.query.id)


    });
    // query url (http://localhost:2024/api/backend/categories?id=67421692feeb4170f1bb4a95) *** isko browser m search krna h insb ko check krne k liye


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