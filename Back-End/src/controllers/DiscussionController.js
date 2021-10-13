const mongoose = require('mongoose')
const discussionModel = require('../Models/DiscussionModel.js')
const log = console.log

function postSomething(req, res){
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