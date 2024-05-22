const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        unique: true,
    },
    courseName: {
        type: String,
        required: [true, 'Please add a course name'],
        trim: true
    },
    year: {
        type: Number,
        required: [true, 'Please add a year'],
        trim: true
    },
    semester: {
        type: Number,
        required: [true, 'Please add a semester'],
        trim: true
    }
})
module.exports = mongoose.model('Course', CourseSchema);   