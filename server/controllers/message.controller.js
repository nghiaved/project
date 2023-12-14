const db = require('../config/db')

exports.getAllMessages = (req, res) => {
    const { id } = req.query

    if (!id)
        return res.status(400).json({ message: `Please complete all information` })

    db.query(`SELECT messages.content, messages.createAt,
            u.username AS sender, v.username AS receiver
            FROM messages
            INNER JOIN users u ON messages.sender = u.id
            INNER JOIN users v ON messages.receiver = v.id
            WHERE messages.id = ?`, [id],
        (error, results) => {
            if (error)
                return res.status(400).json(error)

            return res.status(200).json({ messages: results })
        })
}

exports.sendMessage = (req, res) => {
    const { id, sender, receiver, content } = req.body

    if (!id || !sender || !receiver || !content)
        return res.status(400).json({ message: `Please complete all information` })

    db.query(
        "SELECT * FROM `conversations` WHERE id = ? AND user1 = ? AND user2 = ? OR user1 = ? AND user2 = ?",
        [id, sender, receiver, receiver, sender],
        async (error, results) => {
            if (error)
                return res.status(400).json(error)

            if (results.length === 0)
                return res.status(400).json({ message: 'No conversations found' })

            db.query('INSERT INTO messages SET ?', { id, sender, receiver, content },
                (error, results) => {
                    if (error)
                        return res.status(400).json(error)

                    return res.status(200).json({ message: 'Message has been sent successfully' })
                }
            )
        }
    )
}