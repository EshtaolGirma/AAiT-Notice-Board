const mongoose = require('mongoose')
const discussionModel = require('../Models/DiscussionModel.js')
const log = console.log

// let question = new discussionModel({
//     _id: new mongoose.Types.ObjectId(),
//     userID: req.body.userID,
//     courseID: req.body.courseID,
//     level: 0,
//     value: req.body.question,
// });

function postQuestion(req, res) {
    question
        .save()
        .then(result => {

            res.status(201).json({
                message: "Question posted",
                value: result,
            });
            log("Question posted")
        })
        .catch(err => {
            res.status(500).json({
                error: 'Internal Server Error',
                value: err,
            });
        });
}

function replyToPost(req, res) {
    question = new discussionModel({
        _id: new mongoose.Types.ObjectId(),
        userID: req.body.userID,
        courseID: req.body.courseID,
        level: 0,
        listOfReplies: [req.body.reply, ],
        value: req.body.question,
    });

    question
        .save()
        .then(result => {

            res.status(201).json({
                message: "Reply posted",
                value: result
            });
            log("Reply posted")
        })
        .catch(err => {
            res.status(500).json({
                error: 'Internal Server Error',
                value: err,
            });
        });
}

function getPosts(req, res) {
    discussionModel.find()
        .exec()
        .then(result => {
            if (result) {
                res.status(200).json(result);
                log("getting posts")
            } else {
                res.status(404).json({
                    message: "nothing found",
                })
            }

        })
        .catch(err => {
            res.status(500).json({
                error: 'Internal Server Error',
                value: err,
            });
        });
}

module.exports = {
    getPosts,
    postQuestion,
    replyToPost
}
