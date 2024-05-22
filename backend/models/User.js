const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    Gmail: {
        type: String,
        required: [true],
        unique: true,
    },
    Password: {
        type: String,
        required: [true, 'Password Please'],
        trim: true
    }
})
module.exports = mongoose.model('User', UsersSchema);   