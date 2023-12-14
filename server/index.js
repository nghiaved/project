const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
const http = require('http')
const { Server } = require('socket.io')
require('dotenv').config({ path: './.env' })

const app = express()

const db = require('./config/db')
db.connect(err => err ? console.log(err) : console.log('Connected to database successfully'))

const corsOptions = {
    origin: process.env.ACCESS_CORS,
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(fileupload({ createParentPath: true }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

app.use('/api/users', require('./routes/user.route'))
app.use('/api/friends', require('./routes/friend.route'))
app.use('/api/posts', require('./routes/post.route'))
app.use('/api/conversations', require('./routes/conversation.route'))
app.use('/api/messages', require('./routes/message.route'))

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: process.env.ACCESS_CORS,
        methods: ['GET', 'POST'],
    },
})

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on('join-username', (username) => {
        socket.join(username)
    })

    socket.on('request-friend', (username) => {
        io.to(username).emit('receive-username', username)
    })

    socket.on('disconnect', () => {
        console.log(`User Disconnected: ${socket.id}`)
    })
})

server.listen(process.env.PORT, () => console.log(`Server's running at port ${process.env.PORT}`))
