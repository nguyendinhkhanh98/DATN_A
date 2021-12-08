const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoryDisciplineSchema = new Schema({
    categoryDisciplineName: {
        type: String,
    },
})

module.exports = mongoose.model('categoryDiscipline', CategoryDisciplineSchema)