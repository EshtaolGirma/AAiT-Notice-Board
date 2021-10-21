const mongoose = require("mongoose");

const CourseMaterialSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  courseID: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Course",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CourseMaterial", CourseMaterialSchema);
