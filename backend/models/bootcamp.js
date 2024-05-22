const mongoose = require('mongoose');
const Course=require('./course');
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true
    },
    rollnumber: {
        type: String,
        required: [true, 'Please add a roll number'],
        unique: true,
        trim: true
    },
    courses: [{
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
        attendance: [{
            type: String,
            unique:true
        }]

    }]

}, timestamp = true);

module.exports = mongoose.model('Bootcamp', BootcampSchema);   
