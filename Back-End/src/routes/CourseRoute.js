var express = require('express');
var router = express.Router();
const Course = require("../controllers/CourseController");


router.get('/', Course.getCourse);
router.post('/', Course.postCourse);
router.get('/:courseId', Course.getCourseById);
router.patch('/:courseId', Course.updateCourseByID);
router.delete('/:courseId', Course.deleteCourseByID);


module.exports = router;