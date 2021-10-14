const mongoose = require('mongoose');

const DiscussionSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        username:{
           type: String,
           required: true

        },
        couresId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
        topic:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Discussion",
            required: false,
        },
        level:{
            type: Integer,
            required: true,

        },
        replyArray:[
            {
                type:String,
                required: false,
            }
        ],
        comment:{
            type: String,
            required: true,
        }

    }
)

module.exports = mongoose.model('Discussion',DiscussionSchema);