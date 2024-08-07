const mongoose = require('mongoose')

const trainerProfileSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        fullname: {
            type: String
        },
        phone: {
            type: Number
        },
        subjects: {
            type: [String],
            require: true
        },
        qualification: {
            type: String
        },
        profilePicture: {
            type: String
        },
    },
    {
        timestamps: true,
        collection: 'trainerProfile'
    }
);

const trainerProfile = mongoose.model('TrainerProfile', trainerProfileSchema);

module.exports = trainerProfile;