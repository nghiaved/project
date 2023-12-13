const express = require('express')
const messageController = require('../controllers/message.controller')

const router = express.Router()

router.get('/get-all-messages', messageController.getAllMessages)

module.exports = router
