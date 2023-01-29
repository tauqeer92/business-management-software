const express = require('express')
const createUser = require('../service/users.service')

const UserController = {
    Create: async (req, res) => {
        const userData = {name: req.body.name, email: req.body.email}
        const user = await createUser(userData)
        res.json(userData)
    }
}

module.exports = UserController