const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
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
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

app.use('/api/users', require('./routes/user.route'))
app.use('/api/friends', require('./routes/friend.route'))

app.listen(process.env.PORT, () => console.log(`Server's running at port ${process.env.PORT}`))
