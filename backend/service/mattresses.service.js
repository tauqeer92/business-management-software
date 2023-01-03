const Mattress = require("../models/mattress.model");

const getAllMattresses = async () => {
    return Mattress.find()
}

const createMattress = async () => {
    return await Mattress.create(input)
}

const deleteMattress = async () => {
    Mattress.deleteOne(input)
}

module.exports = getAllMattresses, createMattress, deleteMattress