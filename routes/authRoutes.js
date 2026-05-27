import express from 'express'
import bcrypt from 'bcrypt'
import { getDB } from '../db/db.js'

export const authRoutes = express.Router()

authRoutes.post('/register', async (req, res) => {
    let { name, username, password } = req.body
    name = name.trim()
    username = username.trim()
    password = password.trim()

    if (!name || !username || !password) {
        return res.status(400).json({error: 'All fields are required.'})
    }

    const db = await getDB()
    const usernameExists = await db.get(
        `SELECT username FROM users WHERE username = ?`,[username]
    )
    if (usernameExists) {
        return res.status(400).json({error: 'Username already in use.'})
    }

    try {
        const hashed = await bcrypt.hash(password, 10)
        const result = await db.run(`INSERT INTO users
            (name, username, password) VALUES(?, ?, ?)
            `, [name, username, hashed]
        )
        
        // binding user to session
        req.session.userId = result.lastID

        return res.status(201).json({ "message": "User registered" })

    } catch(err) {
        console.log('Error in registration:', err)
        return res.status(500).json({ error: "Registration failed. Please try again." })
    } finally {
        await db.close()
    }
})

authRoutes.post('/login', async (req, res) => {
    let {username, password} = req.body
    username = username.trim()
    password = password.trim()

    if (!username || !password) {
        return res.status(400).json({ error: "All fields are required." })
    }

    const db = await getDB()
    
    try {
        const result = await db.get(
            `SELECT id, username, password FROM users WHERE username = ?`, [username]
        )
        console.log('fetched user from login page:', result)
        const storedUsername = result.username
        if (username != storedUsername) {
            return res.status(400).json({ error: "Invalid credentials" })
        }

        // check password
        const storedPassword = result.password
        const isMatch = await bcrypt.compare(password, storedPassword)
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" })
        }

        // all is good
        req.session.userId = result.id

        return res.status(200).json({ message: "Logged in" })

    } catch(err) {
        return res.status(500).json({ error: "Login failed. Please try again." })
    } finally {
        await db.close()
    }
})

authRoutes.post('/logout', (req, res) => {
    req.session.destroy( err => {
        return res.status(200).json({ message: "Logged out" })
    })
})

authRoutes.get('/me', async (req, res) => {
    const userId = req.session.userId
    if (!userId) {
        return res.json({ isLoggedIn: false })
    }

    const db = await getDB()
    try {
        const name = await db.get(
            `SELECT name FROM users WHERE id = ?`, [userId]
        )
        console.log('Already Logged user:', name.name)

        return res.json({ isLoggedIn: true, name: name.name })
    } catch(err) {
        return res.status(500).json({ error: "Internal server error" })
    } finally {
        await db.close()
    }
})