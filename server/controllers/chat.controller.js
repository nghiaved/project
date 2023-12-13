const db = require('../config/db')

exports.getChat = (req, res) => {
    const { user1, user2 } = req.query

    if (!user1 || !user2)
        return res.status(400).json({ message: `Please complete all information` })

    db.query('SELECT * FROM `chats` WHERE user1 = ? AND user2 = ? OR user1 = ? AND user2 = ?', [user1, user2, user2, user1],
        (error, results) => {
            if (error)
                return res.status(400).json(error)

            return res.status(200).json({ chat: results[0] })
        })
}