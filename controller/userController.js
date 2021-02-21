const { Users } = require('../models')
const bcrypt = require('bcrypt')
const { nanoid } = require('nanoid')
const jwt = require('jsonwebtoken')
const BaseController = require('./baseController')

class UserController extends BaseController {
    constructor() {
        super(Users)
    }

    async register(firstName, lastName, username, email, password, role) {
        const payload = {
            id: nanoid(),
            firstName,
            lastName,
            username,
            email,
            role,
            password: await bcrypt.hash(password, 10)
        }
        const result = await Users.create(payload)
        return {
            id: result.id,
            username: result.username,
            token: jwt.sign({ id: result.id }, process.env.JWT_SECRET)
        }
    }

    async login(username, password) {
        const user = await Users.findOne({
            where: { username }
        })
        if (await bcrypt.compare(password, user.password)) {
            return {
                id: user.id,
                username: user.username,
                token: jwt.sign({ id: user.id }, process.env.JWT_SECRET)
            }
        } else {
            return "wrong password"
        }
    }
}

module.exports = UserController