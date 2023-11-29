const express = require('express')
const postController = require('../controllers/post.controller')

const router = express.Router()

router.get('/get-all-my-posts', postController.getAllMyPosts)
router.post('/create-post', postController.createPost)

module.exports = router
