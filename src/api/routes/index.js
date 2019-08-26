const express = require('express')

/*
import routes
*/
const authRoutes = require('./auth.route')
const commentRoutes = require('./comment.route')

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
    res.json({ meessage: 'server is live' })
})

// "build": "babel src --out-dir dist",



module.exports = router