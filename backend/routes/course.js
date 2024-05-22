const express = require('express');
const { getCourses, getCourse, createCourse, updateCourse, deleteCourse, getCoursesBySem } = require('../controller/course');

const router = express.Router();

// For getting all courses and creating a new course
router.route('/')
    .get(getCourses)
    .post(createCourse);
// For getting a single course, updating, or deleting it
router.route('/:id')
    .get(getCourse)
    .put(updateCourse)
    .delete(deleteCourse);
router.route('/semester/:semester')
    .get(getCoursesBySem);

module.exports = router;
