// const models = require('../models')
const express = require('express');
const mongoose = require('mongoose');

const Course = require('../models/CourseModel');




function getCourse(req, res) {
    Course.find()
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
                console.log("getting")
            }
            else {
                res.status(404).json({ message: "Page not found" })
            }

        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// Post Course

function postCourse(req, res) {
    const course = new Course({
        _id: new mongoose.Types.ObjectId(),
        dept_id: req.body.dept_id,
        name: req.body.name,
        year: req.body.year,
        semester: req.body.semester,
        ECTS: req.body.ECTS,
        creditHour: req.body.creditHour,
        LecturerName: req.body.LecturerName,
        LecturerOffice: req.body.LecturerOffice,
        LecturerOfficeHour: req.body.LecturerOfficeHour,
        LabAssistanceName: req.body.LabAssistanceName,
        LabAssistanceOffice: req.body.LabAssistanceOffice,
        LabAssistanceOfficeHour: req.body.LabAssistanceOfficeHour,
        description: req.body.description,
      });

    course
        .save()
        .then(result => {
            Department.updateOne(
                { _id: req.body.deptId },
                { $push: { courses: course._id } }
              ).exec();
            res.status(201).json({
                message: "posting..",
                createdCourse: result
            });
            console.log("posting")
        })
        .catch(err => {

            res.status(500).json({
                error: err
            });
        });

}

// Get Course by id

function getCourseById(req, res) {
    const id = req.params.courseId;
    Course.findById(id)
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
            }
            else {
                res.status(404).json({ message: "Page not found" })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// Update Course 

function updateCourseByID(req, res) {
    const id = req.params.courseId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Course.updateMany({ _id: id },
        { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// delete Course 

function deleteCourseByID(req, res) {
    const id = req.params.courseId;
    Course.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}



module.exports = {
    getCourse,
    postCourse,
    getCourseById,
    updateCourseByID,
    deleteCourseByID,


};



