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

//test route
router.get('/test', (req, res) => {
    res.json({meessage: 'server is live'})
})

// "build": "babel src --out-dir dist",



export default router