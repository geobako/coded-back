const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    movieTitle: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    }

}, { timestamps: true })


module.exports = mongoose.model('Comment', commentSchema)