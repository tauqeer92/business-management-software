const mongoose = require('mongoose')
const Material = require("../models/material.model");

const createMaterial = async (input) => {
    return await Material.create(input)
}

const getAllMaterials = async () => {
  const materials = Material.find()
  return materials
}

const updateMaterial = async (input) => {
  
  return await Material.updateOne(input)

}

module.exports = { createMaterial, getAllMaterials, updateMaterial };