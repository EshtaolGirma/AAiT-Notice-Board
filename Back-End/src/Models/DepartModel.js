const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  deanName: {
    type: String,
    required: true,
  },
  deanOffice: {
    type: String,
    required: true,
  },
  deanOfficeHour: [
    {
      type: String,
      required: true,
    },
  ],
  advisorName: {
    type: String,
    required: true,
  },
  advisorOffice: {
    type: String,
    required: true,
  },
  advisorOfficeHour: [
    {
      type: String,
      required: true,
    },
  ],
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: false,
    },
  ],
  newsFeeds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NewsFeed",
      required: false,
    },
  ],
});

module.exports = mongoose.model("Department", departmentSchema);
