const mongoose = require("mongoose");

const Department = require("../Models/DepartModel");

// get list of all department
function getDepartment(res) {
  Department.find()
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
        console.log("getting");
      } else {
        res.status(404).json({ message: "Page not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}

// create a department
function postDepartment(req, res) {
  const department = new Department({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
  });

  department
    .save()
    .then((result) => {
      res.status(200).json({
        message: "posting..",
        createdCourse: result,
      });
      console.log("post");
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}

module.exports = { getDepartment, postDepartment };
