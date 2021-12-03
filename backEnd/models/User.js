const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        unique: true,
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema)