import mongoose, { Schema } from 'mongoose'

const commentSchema = new Schema({
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


export default mongoose.model('Comment', commentSchema)