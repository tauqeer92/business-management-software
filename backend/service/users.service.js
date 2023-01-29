const mongoose = require('mongoose')
const User = require('../models/user.model.js')

const createUser = (input) => {
  return User.create(input)
}

module.exports = createUser