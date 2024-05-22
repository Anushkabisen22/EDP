const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getStudentsInCourse,
  updateBootcampStudent,
  getStudentInfo
} = require('../controller/bootcamps');

const router = express.Router();

// Route to get all bootcamps
router.route('/').get(getBootcamps);

// Route to get student information 
router.route('/studentInfo/:rollnumber').get(getStudentInfo);

// Route to create a new bootcamp
router.route('/').post(createBootcamp);

// Route to get a specific bootcamp by ID
router.route('/:id').get(getBootcamp);

// route to get students by their rollno
router.route('/studentInfo/:rollnumber').get(getStudentInfo);
// Route to update a bootcamp
router.route('/attendance').put(updateBootcamp);
router.route('/student').put(updateBootcampStudent);
// Route to delete a bootcamp
router.route('/:id').delete(deleteBootcamp);

// Route to get all students enrolled in a course
router.route('/course/:id').get(getStudentsInCourse);

module.exports = router;