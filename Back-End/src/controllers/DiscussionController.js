const mongoose = require('mongoose')
const discussionModel = require('../Models/DiscussionModel.js')
const log = console.log

function postSomething(req, res) {
    const toBePosted = new discussionModel({
        _id: new mongoose.Types.ObjectId(),
        userID: req.body.userID,
        courseID: req.body.courseID,
    });

    toBePosted
        .save()
        .then(result => {

            res.status(201).json({
                message: "comment posted",
            });
            log("Comment posted")
        })
        .catch(err => {
            res.status(500).json({
                error: 'Internal Server Error'
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
            });
        });
}

module.exports = {
    getPosts,
    postSomething,
};
