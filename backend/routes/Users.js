const express = require('express');
const { validUser,signupUser} = require('../controller/Users');

const router = express.Router();

// For getting all courses and creating a new course
router.route('/signup').post(signupUser);
router.route('/login').post(validUser);
module.exports = router;
