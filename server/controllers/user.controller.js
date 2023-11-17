const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = require('../config/db')

exports.register = (req, res) => {
    const { username, password } = req.body

    if (!username || !password)
        return res.status(400).json({ message: `Please complete all information` })

    db.query(
        'SELECT id FROM users WHERE username = ?', [username],
        async (error, results) => {
            if (error)
                return res.status(400).json(error)

            if (results.length > 0)
                return res.status(400).json({ message: 'That username is already in use' })

            const hashedPassword = await bcrypt.hash(password, 8)
            db.query('INSERT INTO users SET ?', { ...req.body, password: hashedPassword },
                (error, results) => {
                    if (error)
                        return res.status(400).json(error)
                    else
                        return res.status(200).json({ message: 'User registered successfully' })
                })
        }
    )
}

exports.login = (req, res) => {
    const { username, password } = req.body

    if (!username || !password)
        return res.status(400).json({ message: `Please complete all information` })

    db.query(
        'SELECT * FROM users WHERE username = ?', [username],
        async (error, results) => {
            if (error)
                return res.status(400).json(error)

            if (results.length === 0)
                return res.status(400).json({ message: `User's not existed` })

            const isMatch = await bcrypt.compare(password, results[0].password)
            if (!isMatch)
                return res.status(400).json({ message: `Password incorrect` })

            const userInfo = results[0]
            delete userInfo.password
            const token = jwt.sign({ ...userInfo }, process.env.SECRET_KEY)
            return res.status(200).json({ token, message: 'User logged in successfully' })
        }
    )
}

exports.list = (req, res) => {
    db.query(
        'SELECT username, firstName, lastName FROM users',
        async (error, results) => {
            if (error)
                return res.status(400).json(error)

            if (results.length === 0)
                return res.status(400).json({ message: 'No users found' })

            return res.status(200).json({ users: results })
        }
    )
}

exports.update = (req, res) => {
    const id = req.query.id

    if (!id)
        return res.status(400).json({ message: `Please complete all information` })

    db.query(
        'SELECT id FROM users WHERE id = ?', [id],
        async (error, results) => {
            if (error)
                return res.status(400).json(error)

            if (results.length === 0)
                return res.status(400).json({ message: `User's not existed` })

            if (req.body.password) {
                const hashedPassword = await bcrypt.hash(req.body.password, 8)
                req.body.password = hashedPassword
            }

            db.query('UPDATE users SET ? WHERE id = ?', [{ ...req.body }, id],
                (error, results) => {
                    if (error)
                        return res.status(400).json(error)
                    else
                        return res.status(200).json({ message: 'User updated successfully' })
                })
        }
    )
}

exports.delete = (req, res) => {
    const { id, username, password } = req.query

    if (!id || !username || !password)
        return res.status(400).json({ message: `Please complete all information` })

    db.query(
        'SELECT username, password FROM users WHERE id = ?', [id],
        async (error, results) => {
            if (error)
                return res.status(400).json(error)

            if (results.length === 0)
                return res.status(400).json({ message: `User's not existed` })

            if (results[0].username !== username)
                return res.status(400).json({ message: `Username is incorrect` })

            const isMatch = await bcrypt.compare(password, results[0].password)
            if (!isMatch)
                return res.status(400).json({ message: `Password is incorrect` })

            db.query(
                'DELETE FROM users WHERE id = ?', [id],
                async (error, results) => {
                    if (error)
                        return res.status(400).json(error)

                    return res.status(200).json({ message: 'User deleted successfully' })
                }
            )
        }
    )
}

exports.changePassword = (req, res) => {
    const id = req.query.id
    const { oldPassword, newPassword, renewPassword } = req.body

    if (!id || !oldPassword || !newPassword || !renewPassword)
        return res.status(400).json({ message: `Please complete all information` })

    if (newPassword !== renewPassword)
        return res.status(400).json({ message: `Re-enter the new password incorrectly` })

    db.query(
        'SELECT password FROM users WHERE id = ?', [id],
        async (error, results) => {
            if (error)
                return res.status(400).json(error)

            if (results.length === 0)
                return res.status(400).json({ message: `User's not existed` })

            const isMatch = await bcrypt.compare(oldPassword, results[0].password)
            if (!isMatch)
                return res.status(400).json({ message: `Password is incorrect` })

            const hashedPassword = await bcrypt.hash(newPassword, 8)

            db.query('UPDATE users SET ? WHERE id = ?', [{ password: hashedPassword }, id],
                (error, results) => {
                    if (error)
                        return res.status(400).json(error)
                    else
                        return res.status(200).json({ message: 'User updated successfully' })
                })
        }
    )
}