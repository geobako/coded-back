import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import router from './api/routes/index'


const app = express()

/*
middlewares
*/
app.use(compression())
app.use(helmet())
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 50000
}))
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.raw())
app.use(cors())
app.use(morgan('dev'))


/*
Use routes
*/
app.use('/', router)





export default app