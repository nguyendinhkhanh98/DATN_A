const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTimeWorkingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    statusTimeWorkingId: {
        type: Schema.Types.ObjectId,
        ref: 'statusTimeWorking'
    },
    date: {
        type: Date,
    },
    startTimeWorking: {
        type: String,
    },
    endTimeWorking: {
        type: Date,
    },
})

module.exports = mongoose.model('userTimeWorking', UserTimeWorkingSchema)