// "Discussion": {
//     "id": "Integer, PK",
//     "userID": "Integer //foreign key",
//     "Course": "Integer //foreign key",
//     "topic":"null",
//     "level":"0 ",
//     "listofreply":"array ", // list of discussion ids that are replyies to this
//     "Disc":"String the acutal question or comment"
//   },

const mongoose = require('mongoose')

const discussionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: {
        type: Number,
        ref: "User",
        required: true,
    },
    courseID: {
        type: Number,
        ref: "Course",
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
    listOfReplies: Array,
    value: {
        type: String,
        required: true,
    },
    replies:[
        {
            _id: mongoose.Schema.Types.ObjectId,
            text:{
                type: String,
                required: true,
            }
        }
    ]
});


module.exports = mongoose.model('discussion', discussionSchema);
