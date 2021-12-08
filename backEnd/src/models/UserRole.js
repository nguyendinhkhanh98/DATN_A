const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRoleSchema = new Schema({
    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'role'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('userRole', UserRoleSchema)