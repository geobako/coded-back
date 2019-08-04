import express from 'express'
import { addComment, getComments } from '../controllers/comment.controller'

const CommentRouter = express.Router()


CommentRouter.post('/new', addComment)
CommentRouter.post('/all', getComments)





export default CommentRouter