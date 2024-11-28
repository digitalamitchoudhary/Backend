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
    const result = await db.collection("categories").find().toArray();

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

    // const result = await db.collection("categories").findOne({
        
    //     _id : new mongodb.ObjectId(req.query.id)


    // });
    // query url (http://localhost:2024/api/backend/categories?id=67421692feeb4170f1bb4a95) *** isko browser m search krna h insb ko check krne k liye


    console.log(result)

    var data = {

        status : true,
        msg : "Record View Successfully",
        data: result

    }
    res.send(data)
}


// sir method*******************wscubetech
exports.update =async(req,res)=>{

    const db = await dbConnection();
//     // for single update ***************

// //         // const result = await db.collection("categories").updateOne(
// //         //     {
// //         //         _id : new mongodb.ObjectId(req.body.id)
// //         //     },
// //         //     {
// //         //         $set: {
// //         //             name : req.body.name,
// //         //             image : req.body.image
// //         //         }
// //         //     }

// //         // )
// --------------------------------------------------------for many update ***************
        // const result = await db.collection("categories").updateMany(
        //     {
        //         image :  req.body.image
        //     },
        //     {
        //         $set: {
        //             name: req.body.name 
        //         }
        //     }

        // )

        //******************************************************************* */ Advance update//////////////////////////
        /***** using for change name by newName value**/
        const result = await db.collection("categories").updateMany(
            { name: req.body.name }, // Find documents with the current name
            { $set: { name: req.body.newName } } // Update the name field to the new value
        );

    var data = {

        status : true,
        msg : "Record Update Successfully",
        data: result

    }
    res.send(data)

/******** important******/
    // example Request {
    //     "name": "oldName",
    //     "newName": "newName"
    // }
    // This will update all documents where name is "oldName" to have name as "newName".
    

    /*********************chat gpt method for change name value by newName******************************************************* */
// try {
//     const db = await dbConnection(); // Establish database connection
    
//     // Ensure both old and new names are provided
//     const { name, newName } = req.body;
//     if (!name || !newName) {
//         return res.status(400).send({
//             status: false,
//             msg: "Both 'name' and 'newName' are required."
//         });
//     }
    
//     // Perform the update operation
//     const result = await db.collection("categories").updateMany(
//         { name }, // Match documents with the current name
//         { $set: { name: newName } } // Update the name to the new value
//     );
    
//     // Construct the response
//     const data = {
//         status: true,
//         msg: result.modifiedCount > 0 
//             ? "Records updated successfully."
//             : "No records found with the specified name.",
//         data: result
//     };
//     res.send(data);
// } catch (error) {
//     // Handle errors
//     res.status(500).send({
//         status: false,
//         msg: "An error occurred during the update operation.",
//         error: error.message
//     });
// }
}













exports.delete =async(req,res)=>{

    const db = await dbConnection();

    // const result = await db.collection("categories").deleteOne(
    //     {  _id : new mongodb.ObjectId(req.params.id) },  
       
    // );


    const result = await db.collection("categories").deleteMany(
        { name : req.params.name },  
       
    );

    var data = {

        status : true,
        msg : "Record Delete Successfully",
        data: result

    }
    res.send(data)
}