const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    roleName: {
        type: String,
        unique: true,
    },
})

module.exports = mongoose.model('role', RoleSchema)