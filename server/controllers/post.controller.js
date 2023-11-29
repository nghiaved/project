const db = require('../config/db')
const { Buffer } = require('buffer')

exports.createPost = (req, res) => {
    const { status, author } = req.body
    const image = req.files?.image

    if (!status || !author)
        return res.status(400).json({ message: `Please complete all information` })

    let base64Image
    let imagePath
    if (image) {
        base64Image = Buffer.from(image.name + Date.now()).toString('base64')
        imagePath = process.env.SERVER + '/images/posts/' + base64Image
    }

    db.query('INSERT INTO posts SET ?', { status, author, image: imagePath },
        (error, results) => {
            if (error)
                return res.status(400).json(error)

            if (image) image.mv("./public/images/posts/" + base64Image)
            return res.status(200).json({ message: 'Post created successfully' })
        })
}

exports.getAllMyPosts = (req, res) => {
    const { author } = req.query

    if (!author)
        return res.status(400).json({ message: `Please complete all information` })

    db.query(
        'SELECT * FROM posts WHERE author = ?', [author],
        async (error, results) => {
            if (error)
                return res.status(400).json(error)

            if (results)
                return res.status(200).json({ posts: results })
        })
}
