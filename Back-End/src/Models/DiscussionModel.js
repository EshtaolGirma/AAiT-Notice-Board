// "Discussion": {
//     "id": "Integer, PK",
//     "userID": "Integer //foreign key",
//     "Course": "Integer //foreign key"
// }

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
});




module.exports = mongoose.model('discussion', discussionSchema);
