const http = require('http')
const app = require('./app')
const keys = require('./config/keys')
const mongoose = require('mongoose')
const socketio = require('socket.io')



const server = new http.Server(app)
const io = socketio(server)


io.on('connection', async (socket) => {
    console.log('a user connected');
    socket.on('new comment', (movieTitle) => {
        io.emit('comment added')
    })

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
})

const PORT = process.env.PORT || 5000

mongoose.connect(keys.mongoConnectionString, { useNewUrlParser: true })
    .then(result => {
        console.log('Connected to databasse')
        server.listen(PORT, () => console.log(` Server is up on port ${PORT}`))
    }).catch(err => console.log(err))