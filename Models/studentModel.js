const mongoose = require('mongoose')

const studentListSchema = new mongoose.Schema(
    {
        studentId: {
            type: String,
            require: true,
            unique: true
        },
        fullname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        gender: {
            type: String
        },
        phone: {
            type: Number
        },
        address: {
            type: String
        }
    },
    { 
        timestamps: true,
        collection:'studentsList'
    }
);

const studentsList = mongoose.model('StudentsList', studentListSchema);

module.exports = studentsList;