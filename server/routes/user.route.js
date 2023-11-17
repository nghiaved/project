const express = require('express')
const userController = require('../controllers/user.controller')

const router = express.Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/list', userController.list)
router.put('/update', userController.update)
router.delete('/delete', userController.delete)
router.patch('/change-password', userController.changePassword)

module.exports = router
