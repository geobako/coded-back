import express from 'express'
import { login, register } from '../controllers/auth.controller'

const AuthRouter = express.Router()


AuthRouter.post('/login', login)
AuthRouter.post('/register', register)





export default AuthRouter