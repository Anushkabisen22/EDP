const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret="Anushka"
exports.signupUser = asyncHandler(async (req, res, next) => {
    try {
        let { Gmail, Password } = req.body;
        console.log(Gmail);
        const user = await User.findOne({ Gmail: Gmail });
        console.log(user);
        if (user) {
             res.status(404).json({ message: 'Sorry a user with this email already exist' });
        }
        const hashed=await bcrypt.hash(Password,10);
        output = await User.create({
            Gmail: Gmail,
            Password: hashed,
        })
        const data = {
            user:{
                id:output._id
            }
        }
        const jwtData = jwt.sign(data, secret);
        res.json("authToken :"+jwtData);
    }
    catch(error) {
        console.error('Error checking user presence and password:', error);
    }
    
});
exports.validUser = asyncHandler(async (req, res, next) => {
    try {
        let { Gmail, Password } = req.body;
        let user = await User.findOne({ Gmail: Gmail });
        if (!user) {
           return res.status(404).json({ error: 'Sorry user does not exist' });
        }
        const passwordComapare =await bcrypt.compare(Password, user.Password);
        // console.log(passwordComapare);
        if (!passwordComapare) {
           return  res.status(404).json({ error: 'Incorrect Password' });
        }
        const data = {
            user: {
                id: user._id
            }
        }
        const jwtData = jwt.sign(data, secret);
        
        res.json("authToken :"+jwtData);
    } catch (error) {
        console.error('Error checking user presence and password:', error);
    }
    
});