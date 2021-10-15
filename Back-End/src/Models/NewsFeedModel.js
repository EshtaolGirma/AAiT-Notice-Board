const mongoose = require("mongoose");

const NewsFeedSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deptId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  postDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("NewsFeed", NewsFeedSchema);
