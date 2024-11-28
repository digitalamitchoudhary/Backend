const categoryModel = require("../../Model/category");

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
    const categoryData = await categoryModel.find({
        // name: req.body.name,
      order: {
        $lt: 5, //less than
      },
    });

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
exports.update = async (req, res) => {
  const result = {
    status: true,
    message: "Record create succesfully",
  };

  res.send(result);
};
exports.delete = async (req, res) => {
  const result = {
    status: true,
    message: "Record create succesfully",
  };

  res.send(result);
};
