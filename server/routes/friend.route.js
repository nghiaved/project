const express = require('express')
const friendController = require('../controllers/friend.controller')

const router = express.Router()

router.get('/get-friend', friendController.getFriend)
router.post('/send-request', friendController.sendRequest)
router.patch('/accept-request', friendController.acceptRequest)
router.delete('/delete-friend', friendController.deleteFriend)

module.exports = router
