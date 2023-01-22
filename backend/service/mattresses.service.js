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

const updateMattress = async (input) => {
    return await Mattress.updateOne({'_id': input.id}, {$push : {materials : input.materials}})
}

module.exports = { createMattress, getAllMattresses, deleteMattress, updateMattress};