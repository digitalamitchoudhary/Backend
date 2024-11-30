const { request } = require("express");
const categoryModel = require("../../Model/category");



// **********************************// add controller*********************************************************

exports.create = async (req, res) => {
  data = new categoryModel({
    name: req.body.name,
    image: req.body.image,
    status: req.body.status,
    order: req.body.order,
    // created_at: Date.now(),
    // updated_at:  Date.now(),
  });

  await data
    .save()
    .then((success) => {
      const result = {
        status: true,
        message: "Record create succesfully",
        success_message: success,
      };

      res.send(result);
    })
    .catch((error) => {
      error_messages = [];

      for (let field in error.errors) {
        error_messages.push(error.errors[field].message);
      }

      const result = {
        status: false,
        message: "Something went wrong!!",
        error_message: error_messages,
      };

      res.send(result);
    });
};
// **********************************// View controller*********************************************************

exports.view = async (req, res) => {
  try {
    // const categoryData = await categoryModel.find();
    // const categoryData = await categoryModel.find().select('name image status order');
    // const categoryData = await categoryModel.find({name: req.body.name, status: 1});
    // const categoryData = await categoryModel.findOne();
    // const categoryData = await categoryModel.findById('67483ddb186fd3eba93f61a9');

    // const categoryData = await categoryModel.find().sort({order:'asc'});
    // const categoryData = await categoryModel.find().limit(2).sort({order:'desc'});
    // const categoryData = await categoryModel.find().limit(5).skip(2).sort({order:'desc'}); //for second page data (pagetion)

    // const categoryData = await categoryModel.find({
    //     // name: req.body.name,
    //   order: {
    //     $gt: 5, //more than
    //   },
    // });
    // const categoryData = await categoryModel.find({
    //     // name: req.body.name,
    //   order: {
    //     $lt: 5, //less than
    //   },
    // });


  //   // use for deleted at date update for remove from view api list but not delete from database
  //   const categoryData = await categoryModel.find({
  //         deleted_at: null});



  //**********************************************And Condition Start*****************************************************************/

  //*********************************************************filter condtion *************************************************************/



//     const condition = {
//       deleted_at: null
       
//     }

    // work when then in thander client key define but value not add like (status: '')
  //   if(req.body.status != ''){
  //     condition.status = req.body.status;
  //   }

  //   // if(req.body.name != ''){
  //   //   condition.name = req.body.name;
  //   // }

  //   // for search by first letter
  //   // if(req.body.name !=''){
  //   //   condition.name = new RegExp("^"+req.body.name);
  //   // }

      
  //   // for search by first and middle letter
  //   if(req.body.name !=''){
  //     condition.name = new RegExp(req.body.name,'i');
  //   }

  // const categoryData = await categoryModel.find(condition);

  // const categoryData = await categoryModel.find(
  //   {
  //         deleted_at: null,
  //         status : req.body.status
           
  //       }
  //  );

  //*********************************************And Condition End Here*****************************************************************/

  //********************************************* OR Condition End Here*****************************************************************/

    

      // ***************simple OR method*****************
      // const categoryData = await categoryModel.find(

      //   {
      //     $or: [
      //       {
      //         name : 'men'
      //       },
      //       {
      //         name : 'women'

      //       }
      //     ]
      //   }
      // );


      // ******************************** This is a Array condition **********************************//
      // const condition = [{
      //         deleted_at: null
               
      //       }]


      //       if(req.body.status != ''){
      //             condition.push({status : req.body.status});
      //           }
            
      //     if(req.body.name != ''){
      //             filterName = new RegExp(req.body.name,'i');
      //             condition.push({name: filterName});
      //             }

      
      // const categoryData = await categoryModel.find(

      //   {
      //     $or: condition  }
      // );

    // ****************************************** if condition empty **************************************************
    // ********************* 1st condition data not send 
    // const condition = [];


    //  **********************************************2nd condition data  send 

        // const condition = [{
          //         deleted_at: null
                   
          //       }]
    
    
          //       if(req.body.status != ''){
          //             condition.push({status : req.body.status});
          //           }
                
          //     if(req.body.name != ''){
          //             filterName = new RegExp(req.body.name,'i');
          //             condition.push({name: filterName});
          //             }
         
      // if (condition.length > 0){

      //   filter = {
      //         $or: condition  }
      
      // }else(
      //   filter = {}
      // )

    
       
      // const categoryData = await categoryModel.find(filter);


      // ******************************* And  & Or Condition ****************************************


            const addCondition = [
              {
                deleted_at: null,
              }
            ];

            const orCondition = [];

            if(req.body.order != undefined){
            if (req.body.order != "") {
              orCondition.push({ order: req.body.order });
            }}

            if(req.body.name != undefined){
            if(req.body.name != ''){
              orCondition.push({name : req.body.name})
            }}

            if (addCondition.length > 0){
              var filter = {$and : addCondition}
            }else{
              var filter = {}
            }

            if (orCondition.length > 0){
                filter.$or = orCondition
            }
            
            console.log(filter);  
            
    
      // const categoryData = await categoryModel.find(filter);


      const categoryData = await categoryModel.find(
        
        
        {
          
          name: { $exists: true },
          deleted_at: null,
          order: { $type: 16 }
        
        });
      // Model.find({role: { $type: 2 } });

  





      // normal method **************************************
      // const categoryData = await categoryModel.find(
        

      //   {
      //     deleted_at : null,
      //     $or : [
      //       {
      //         name:'men'
      //       },
      //       {
      //         name:'women'
      //       },
      //       // {
      //       //   name:'women new'
      //       // }
      //     ]
      //   }
      // );






//*********************************************************** below code is defult code for find error in api ****************************/
    if (categoryData.length != 0) {
      const resp = {
        status: true,
        message: "Record Found Succefully!!",
        data: categoryData,
      };

      res.send(resp);
    } else {
      const resp = {
        status: false,
        message: "No Record Found",
      };

      res.send(resp);
    }
  } catch (error) {
    const resp = {
      status: false,
      message: "Something went wrong",
    };

    res.send(resp);
  }
};






// **********************************// Update controller*********************************************************




exports.update = async (req, res) => {
  try {


        const categoryData = await categoryModel.updateOne(
    
          {
            _id : req.params.id  
            // _id : req.body.id  


          },
          {
            $set : {
              name : req.body.name
            }
          }
    
    
         );
    
          const resp = {
            status: true,
            message: "Record update Successfully!!",
           
          };
    
          res.send(resp);
       
      } catch (error) {
        const resp = {
          status: false,
          message: "Something went wrong",
        };
    
        res.send(resp);
      }
    
    
    
      // const result = {
      //   status: true,
      //   message: "Record update succesfully",
      // };
    
      // res.send(result);
};


















// **********************************// delete controller*********************************************************




// wscube tech method******

// exports.delete = async (req, res) => {

//   try {


  
//     // const categoryData = await categoryModel.deleteOne({

//     //   _id : req.query.id  
//     // });


    
       
//     // const categoryData = await categoryModel.deleteOne({

//     //   _id : req.body.id  
//     // });
       
//     // const categoryData = await categoryModel.deleteOne({

//     //   _id : req.params.id  
//     // });

   

//     // const categoryData = await categoryModel.findByIdAndDelete(req.params.id  );


//         // use for deleted at date update for remove from view api list but not delete from database


       

//     const categoryData = await categoryModel.updateOne(

//       {
//         _id : req.params.id  
//       },
//       {
//         $set : {
//           deleted_at : Date.now()
//         }
//       }


//      );

//       const resp = {
//         status: true,
//         message: "Record delete Successfully!!",
       
//       };

//       res.send(resp);
   
//   } catch (error) {
//     const resp = {
//       status: false,
//       message: "Something went wrong",
//     };

//     res.send(resp);
//   }



//   // const result = {
//   //   status: true,
//   //   message: "Record create succesfully",
//   // };

//   // res.send(result);
// };



exports.delete = async (req, res) => {
  try {
    // Validate ID format (optional, if you're using MongoDB ObjectId)
    if (!req.params.id) {
      return res.status(400).send({
        status: false,
        message: "Invalid or missing ID",
      });
    }

    // Check if the record exists and is not already deleted
    const categoryExists = await categoryModel.findOne({ 
      _id: req.params.id, 
      deleted_at: null 
    });

    if (!categoryExists) {
      return res.status(404).send({
        status: false,
        message: "Invalid ID or record not found",
      });
    }

    // Perform soft delete
    await categoryModel.updateOne(
      { _id: req.params.id },
      { $set: { deleted_at: Date.now() } }
    );

    // Return success response
    res.status(200).send({
      status: true,
      message: "Record deleted successfully",
    });

  } catch (error) {
    // Error response
    console.error("Error deleting record:", error);
    res.status(500).send({
      status: false,
      message: "Something went wrong",
    });
  }
};
