const express = require('express')
const UserController = require('../controller/userController')
const user = new UserController()
const app = express.Router()

app.post('/auth/register', async (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    const result = await user.register(firstName, lastName, username, email, password, role)
    res.send(result)
})

app.post('/auth/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const result = await user.login(username, password)
    res.send(result)
})

module.exports = app