const mongoose = require('mongoose');


// "Course": {
//     "id": "Integer, PK",
//     "name": "String",
//     "year": "Integer",
//     "Semester": "Integer",
//     "instructor": "String //get update every semester",
//     "description": "String",
//     "deptID": "Integer //foreign key"
//   },
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
    instructor: {
        type: String,
        required: false,
    },
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




module.exports = mongoose.model('Course', courseSchema);