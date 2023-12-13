const express = require('express')
const chatController = require('../controllers/chat.controller')

const router = express.Router()

router.get('/get-chat', chatController.getChat)

module.exports = router
