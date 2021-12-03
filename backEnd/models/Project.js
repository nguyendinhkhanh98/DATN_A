const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    nameProject: {
        type: String,
    },
})

module.exports = mongoose.model('project', ProjectSchema)