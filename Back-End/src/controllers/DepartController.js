const mongoose = require("mongoose");

const Department = require("../Models/DepartModel");

// get list of all department
function getDepartment(_, res) {
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
      console.log(err);
      res.status(500).json({
        message: "Faced an error while fetching",
        error: err,
      });
    });
}

// get a single department by id

function getDepartmentById(req, res) {
  const id = req.params.departmentID;
  Department.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
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

// Update a department detail

function updateDepartmentByID(req, res) {
  const id = req.params.departmentID;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  Department.updateMany({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}

// delete a department

function deleteDepartmentByID(req, res) {
  const id = req.params.departmentID;
  Department.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}

module.exports = {
  getDepartment,
  getDepartmentById,
  postDepartment,
  updateDepartmentByID,
  deleteDepartmentByID,
};
