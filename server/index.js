const express = require('express')
const cors = require('cors')
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
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/users', require('./routes/user.route'))

app.listen(process.env.PORT, () => console.log(`Server's running at port ${process.env.PORT}`))
