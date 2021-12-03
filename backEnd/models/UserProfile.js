const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
    userId: {       
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'project'
    },
    name: {
        type: String,
        unique: true,
    },
    gender: {
        type: String,
    },
    salary: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    address: {
        type: String,
    }
})

module.exports = mongoose.model('userProfile', UserProfileSchema)