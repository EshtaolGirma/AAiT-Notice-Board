const mongoose = require("mongoose");

const DiscussionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  replies: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      text: {
        type: String,
        required: true,
      },
      user: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Discussion", DiscussionSchema);

// const replySchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   courseID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Course",
//     required: true,
//   },
//   username: {
//     type: String,
//     ref: "User",
//     required: true,
//   },
//   topic: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: Question,
//     required: false,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
// });
// const replySchema = mongoose.model("Reply", questionSchema);

// module.exports = {
//   Question: questionSchema,
//   //   Reply: replySchema,
// };
