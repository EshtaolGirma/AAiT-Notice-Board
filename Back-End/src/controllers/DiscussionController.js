const express = require("express");
const mongoose = require("mongoose");
const Discussion = require("../Models/DiscussionModel");

module.exports = {
  //GET ALL
  getAll: (req, res) => {
    Discussion.find()
      .populate("topic")
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          message: "Fetched succefully",
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Faced an error while fetching",
          error: err,
        });
      });
  },
  //GET BY ID
  getOne: (req, res) => {
    const id = req.params.newsId;
    Discussion.find({ _id: id })
      .populate("deptId")
      .exec()
      .then((result) => {
        if (result) {
          console.log(result);
          res.status(200).json({
            message: "Fetched successfully",
            data: result,
          });
        } else {
          res.status(404).json({
            message: "No data with the entry provided",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Faced an error while fetching",
          error: err,
        });
      });
  },
  //DELETE
  delete: (req, res) => {
    const id = req.params.instId;
    Discussion.remove({ _id: id })
      .exec()
      .then((result) => {
        if (result) {
          console.log(result);
          res.status(200).json({
            message: "Data has been successfully deleted",
            Deletedata: result,
          });
        } else {
          res.status(404).json({
            message: "No data to be deleted with the entry provided",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Faced an error while deleting",
          error: err,
        });
      });
  },
  //POST
  post: (req, res) => {
      if (req.body.level == 0) {
        const Discussion = new Discussion({
            _id: new mongoose.Types.ObjectId(),
            user: req.body.user,
            courseID: req.body.course,
            level: req.body.level,
            comment: req.body.comment,
          });
      }else{
          const Discussion = new Discussion({
            _id: new mongoose.Types.ObjectId(),
            user: req.body.user,
            courseID: req.body.course,
            topic: req.body.topic,
            postDate: req.body.postDate,
          });

      }
    Discussion
      .save()
      .then((result) => {
        // Department.updateOne({_id: req.body.deptId}, {$push:{Discussion: Discussion._id }}).exec();
        res.status(200).json({
          message: "Posted successfully",
          PostedData: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Faced an error while posting",
          err: err,
        });
      });
  },

  //UPDATE
  put: (req, res) => {
    Discussion.findByIdAndUpdate({ _id: req.params.newsId }, { $set: req.body })
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          message: "Data updated successfully",
          UpdatedData: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Faced an error while updating",
          error: err,
        });
      });
  },
};
