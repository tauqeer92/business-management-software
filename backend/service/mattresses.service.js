const Mattress = require("../models/mattress.model");

const getAllMattresses = async () => {
    return Mattress.find()
}

const createMattress = async (input) => {
    return Mattress.create(input)
}

const deleteMattress = async () => {
    Mattress.deleteOne(input)
}

module.exports = { createMattress, getAllMattresses, deleteMattress};