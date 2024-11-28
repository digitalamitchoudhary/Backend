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


    // use for deleted at date update for remove from view api list but not delete from database
    const categoryData = await categoryModel.find({
          deleted_at: null});

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
