const express = require('express')
const { addComment, getComments } = require('../controllers/comment.controller')

const CommentRouter = express.Router()


CommentRouter.post('/new', addComment)
CommentRouter.post('/all', getComments)





module.exports = CommentRouter