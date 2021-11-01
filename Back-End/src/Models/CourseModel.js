const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  ECTS: {
    type: Number,
    required: true,
  },
  creditHour: {
    type: Number,
    required: true,
  },
  LecturerName: {
    type: String,
    required: true,
  },
  LecturerOffice: {
    type: String,
    required: true,
  },
  LecturerOfficeHour: [
    {
      type: String,
      required: true,
    },
  ],
  LabAssistanceName: {
    type: String,
    required: true,
  },
  LabAssistanceOffice: {
    type: String,
    required: true,
  },
  LabAssistanceOfficeHour: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: false,
  },
  dept_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: false,
  },
});

module.exports = mongoose.model("Course", courseSchema);
