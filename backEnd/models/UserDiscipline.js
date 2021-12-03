const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDisciplineSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    categoryDisciplineId: {
        type: Schema.Types.ObjectId,
        ref: 'categoryDiscipline'
    },
    statusDisciplineId: {
        type: Schema.Types.ObjectId,
        ref: 'statusDiscipline'
    },
    date: {
        type: Date,
    },
})

module.exports = mongoose.model('userDiscipline', UserDisciplineSchema)