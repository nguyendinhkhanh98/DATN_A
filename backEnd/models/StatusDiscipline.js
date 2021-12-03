const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusDisciplineSchema = new Schema({
    statusDisciplineName: {
        type: String,
        enum: ['TO COMPLETE', 'COMPLETED']
    },
})

module.exports = mongoose.model('statusDiscipline', StatusDisciplineSchema)