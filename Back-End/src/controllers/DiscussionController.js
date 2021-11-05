const mongoose = require("mongoose");
const Discussion = require("../Models/DiscussionModel.js");

function postQuestion(req, res) {
  let question = new Discussion({
    _id: new mongoose.Types.ObjectId(),
    courseID: req.body.courseID,
    username: req.body.username,
    message: req.body.question,
  });
  question
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Question posted",
        value: result,
      });
      console.countReset("Question posted");
    })
    .catch((err) => {
      res.status(500).json({
        error: "Internal Server Error",
        value: err,
      });
    });
}

function replyToPost(req, res) {
  const reply = {
    user: req.body.username,
    text: req.body.reply,
  };
  Discussion.updateOne(
    { _id: req.body.comment_id },
    { $push: { replies: reply } }
  )
    .exec()
    .then((result) => {
      res.status(201).json({
        message: "Reply posted",
        value: result,
      });
      console.log("Reply posted");
    })
    .catch((err) => {
      res.status(500).json({
        error: "Internal Server Error",
        value: err,
      });
    });
}

function getPosts(req, res) {
  Discussion.find()
    .populate("courseID")
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "nothing found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: "Internal Server Error",
        value: err,
      });
    });
}

function getPostsByID(req, res) {
  const courseID = req.params.courseID;
  Discussion.findById({ courseID: courseID })
    // .populate("courseID")
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "nothing found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: "Internal Server Error",
        value: err,
      });
    });
}

module.exports = {
  getPosts,
  getPostsByID,
  postQuestion,
  replyToPost,
};
