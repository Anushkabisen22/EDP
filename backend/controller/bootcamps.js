const Bootcamp = require('../models/bootcamp');
const Course = require('../models/course');
const asyncHandler = require('../middleware/async');
const mongoose = require('mongoose');
const fs = require('fs');
const { google, GoogleApis } = require('googleapis');
const CREDENTIALS = JSON.parse(fs.readFileSync('./credential.json'));
const googleauth = new google.auth.GoogleAuth({
    credentials: CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth: googleauth });
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
});
exports.getStudentInfo = asyncHandler(async (req, res, next) => {
    const rollnumber = req.params.rollnumber;
    console.log(rollnumber);
    const Info = await Bootcamp.findOne({ rollnumber: rollnumber }).populate('courses.courseId','courseName');
    if (!Info) {
        return res.status(404).json({ success: false, message: 'No Student found' });
    }
    console.log(Info);
    res.status(200).json({ success: true, data: Info });
});

exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
        return res.status(404).json({ success: false, message: 'Bootcamp not found' });
    }
    res.status(200).json({ success: true, data: bootcamp });
});

exports.createBootcamp = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
});

exports.updateBootcamp = asyncHandler(async (req, res, next) => {

    const { rollnumber, courseId } = req.body;
    console.log(rollnumber, courseId);
    console.log("update Bootcamp +1");
    const student = await Bootcamp.findOne({ rollnumber });

    if (!student) {
        return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const course = student.courses.find(course => String(course._id) === courseId);
    if (!course) {
        return res.status(404).json({ success: false, message: 'Course not found for the student' });
    }

    try {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        course.attendance.push(String(formattedToday));
        await student.save();
        res.status(200).json({ success: true, message: 'Attendance Marked Successfully' });
    } catch (error) {
        console.error(`Error updating attendance: ${error.message}`);
        res.status(500).json({ success: false, message: 'Error updating attendance' });
    }
});
//@ update the student details and also add the course to the student
exports.updateBootcampStudent = asyncHandler(async (req, res, next) => {
    const { rollnumber, newName, newCourseId } = req.body;
    console.log(req.body);
    try {
        // Find the student by roll number
        const student = await Bootcamp.findOne({ rollnumber });

        // If student is not found, return error
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }

        // Update student's name if provided
        if (newName) {
            student.name = newName;
        }

        // Update student's course list if provided
        if (newCourseId) {
            console.log(newCourseId)

            // Check if the student is already enrolled in the new course
            const existingCourse = student.courses.find(course => String(course._id) === String(newCourseId));
            if (existingCourse) {
                return res.status(400).json({ success: false, message: 'Student is already enrolled in this course' });
            }

            // Push the new course into the student's courses array
            student.courses.push({ _id: newCourseId, attendance: [] });

        }
        console.log(student.courses)
        // Save the updated student document
        await student.save();

        res.status(200).json({ success: true, message: 'Student details updated successfully', data: student });
    } catch (error) {
        console.error(`Error updating student details: ${error.message}`);
        res.status(500).json({ success: false, message: 'Error updating student details' });
    }
});

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
        return res.status(404).json({ success: false, message: 'Bootcamp not found' });
    }
    res.status(200).json({ success: true, data: {} });
});
exports.getStudentsInCourse = asyncHandler(async (req, res, next) => {
    const courseId = req.params.id;

    console.log(courseId);
    try {
        const students = await Bootcamp.find({ 'courses._id': courseId });
        // console.log(students);
        if (!students || students.length === 0) {
            return res.status(404).json({ success: true, message: 'No students found for the course' });
        }

        const data = students.map(student => {
            const course = student.courses.find(course => String(course._id) === courseId);
            return {
                name: student.name,
                rollnumber: student.rollnumber,
                attendance: course.attendance
            }
        });
        console.log(data);
        res.status(200).json({ success: true, data: data });
    } catch (error) {
        console.error(`Error retrieving students: ${error.message}`);
        res.status(500).json({ success: false, message: 'Error retrieving students' });
    }
});
exports.updateBootcampAttendance = asyncHandler(async () => {

    try {
        const spreadsheetId = '1iTmTMsjl_6lWHjZ4qMwKH0pvYS8SxMJWa_doUMEX8Fg';
        const range = 'Sheet1!A1:D'; // Adjust the range as needed

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;

        if (!rows || rows.length === 0) {
            console.log("NO data found");
        } else {
            for (const row of rows) {
                const rollnumber = row[0];
                const courseId = row[1];   
                const attendanceDate = row[3];
                console.log(row[3],"attendanceDate");
                
                if (courseId != null && rollnumber != null) {
                    const updateRequest = {
                        body: { rollnumber, courseId,attendanceDate }
                    };

                    // Call updateBootcamp function for each student
                    await updateBootcampBysheet(updateRequest);


                    console.log(`Attendance has been updated ${rollnumber}`);
                }


            }


        }
    } catch (err) {
        console.error(err);

    }
});
const updateBootcampBysheet = async (updateRequest) => {
    const { rollnumber, courseId, attendanceDate } = updateRequest.body;
    console.log(rollnumber, courseId);
    const student = await Bootcamp.findOne({ rollnumber });
    if (!student) {
        console.log("student not found");

    } else {
        const course = student.courses.find(course => String(course._id) === courseId);
        if (!course) {
            console.log("course not found for the student");
        }
        try {
            if (!course.attendance.includes(String(attendanceDate))) {
                // If attendanceDate is not already present, push it into the array
                console.log(attendanceDate);
                course.attendance.push(String(attendanceDate));
                // Save the student document
                await student.save();
                console.log('Attendance updated successfully');
            } else {
                console.log('Attendance already exists');
            }
        }catch (err) {
            console.error(`Error updating attendance:${err.message}`);
        }
    }
}