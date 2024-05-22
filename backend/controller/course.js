const Course = require('../models/course');
const asyncHandler = require('../middleware/async');

// @desc    Create a new course
// @route   POST /api/courses
// @access  Public
exports.createCourse = asyncHandler(async (req, res, next) => {
    const course = await Course.create(req.body);
    res.status(201).json({ success: true, data: course });
});

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
exports.getCourses = asyncHandler(async (req, res, next) => {
    const courses = await Course.find();
    res.status(200).json({ success: true, msg: "All courses fetched", data: courses });
});
exports.getCoursesBySem = asyncHandler(async (req, res, next) => {
    const courses = await Course.find({ semester: req.params.semester });
    res.status(200).json({ success: true, msg: `All course of ${req.params.semester}th semester`, data: courses });
})

// @desc    Get a single course
// @route   GET /api/courses/:id
// @access  Public
exports.getCourse = asyncHandler(async (req, res, next) => {
    const course = await Course.findById(req.params.id);

    if (!course) {
        return res.status(404).json({ success: false, msg: "Course not found" });
    }

    res.status(200).json({ success: true, data: course });
});

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Public
exports.updateCourse = asyncHandler(async (req, res, next) => {
    let course = await Course.findById(req.params.id);

    if (!course) {
        return res.status(404).json({ success: false, msg: "Course not found" });
    }

    course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({ success: true, data: course });
});

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Public
exports.deleteCourse = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
        return res.status(404).json({ success: false, msg: "Course not found" });
    }



    res.status(200).json({ success: true, msg: `${course.courseName}Course deleted successfully` });
});
