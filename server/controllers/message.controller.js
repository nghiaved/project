const db = require('../config/db')

exports.getAllMessages = (req, res) => {
    const { id } = req.query

    if (!id)
        return res.status(400).json({ message: `Please complete all information` })

    db.query('SELECT * FROM `messages` WHERE id = ?', [id],
        (error, results) => {
            if (error)
                return res.status(400).json(error)

            return res.status(200).json({ messages: results })
        })
}