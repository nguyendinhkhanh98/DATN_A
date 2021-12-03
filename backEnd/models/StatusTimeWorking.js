const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusTimeWorkingSchema = new Schema({
    statusWorkingName: {
        type: String,
        enum: ['FULL', 'HALF', 'NONE']
    },
})

module.exports = mongoose.model('statusTimeWorking', StatusTimeWorkingSchema)