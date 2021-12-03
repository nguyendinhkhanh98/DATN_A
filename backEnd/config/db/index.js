require('dotenv').config();

const mongoose = require('mongoose');


async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/Attendance_employee_system')
        console.log('connect successfully!!!');
    }catch(error) {
        console.log('connect failure!!!')
    }
}

module.exports = { connect };