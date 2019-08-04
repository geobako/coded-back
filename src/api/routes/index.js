import express from 'express'

/*
import routes
*/
import authRoutes from './auth.route'
import commentRoutes from './comment.route'

/*
initialize router
*/
const router = express.Router()

/*
Use routes
*/
router.use('/auth', authRoutes)
router.use('/comment', commentRoutes)



export default router