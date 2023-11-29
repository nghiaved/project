const db = require('../config/db')

exports.createPost = (req, res) => {
    const { status, author, image } = req.body

    if (!status || !author)
        return res.status(400).json({ message: `Please complete all information` })

    db.query('INSERT INTO posts SET ?', { status, author, image },
        (error, results) => {
            if (error)
                return res.status(400).json(error)

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
