const mongoose = require("mongoose");
const Material = require("../Models/CourseMatModel");

// Course material get endpoint

function getMaterial(req, res) {
  Material.findById({ courseID: req.body.courseId })
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Page not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Faced an error while fetching",
        error: err,
      });
    });
}

// Course material post endpoint

function postMaterial(req, res) {
  let material = new Material({
    _id: mongoose.Types.ObjectId(),
    courseID: req.body.course,
    category: req.body.cat,
    filename: req.body.file,
  });
  metadata
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Successfully",
        value: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: "Internal Server Error",
        value: err,
      });
    });
}

// Course material delete endpoint

function deleteMaterial(req, res) {
  const id = req.params.materialID;
  Material.remove({ _id: id })
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
  getMaterial,
  postMaterial,
  deleteMaterial,
};
