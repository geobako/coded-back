const Comment = require('../models/comments.model')
const User = require('../models/User.model')

exports.addComment = async (req, res) => {
    const { comment, userId, movieTitle } = req.body
    try {

        const user = await User.findById(userId)

        const newComment = await new Comment({
            userId,
            movieTitle,
            comment,
            userEmail: user.email
        }).save()
        return res.json({ comment: newComment })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'something went wrong' })
    }
}

exports.getComments = async (req, res) => {
    const { movieTitle } = req.body
    try {

        const comments = await Comment.find({ movieTitle }).sort({ createdAt: -1 })

        return res.json({ comments })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'something went wrong' })
    }
}