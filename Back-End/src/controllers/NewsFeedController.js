const express = require("express");
const mongoose = require("mongoose");
const NewsFeed = require("../Models/NewsFeedModel");
const Department = require("../Models/DepartModel");

module.exports = {
  //GET ALL
  getAll: (req, res) => {
    NewsFeed.find()
      .populate("deptId")
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          message: "Fetched successfully",
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
    NewsFeed.find({ _id: id })
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
    NewsFeed.remove({ _id: id })
      .exec()
      .then((result) => {
        if (result) {
          console.log(result);
          res.status(200).json({
            message: "Data has been successfully deleted",
            DeletedData: result,
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
    const newsFeed = new NewsFeed({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      deptId: req.body.deptId,
      postDate: req.body.postDate
    });
    newsFeed
      .save()
      .then((result) => {
        Department.updateOne({_id: req.body.deptId}, {$push:{newsFeeds: newsFeed._id }}).exec();
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
    NewsFeed.findByIdAndUpdate({ _id: req.params.newsId }, { $set: req.body })
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
