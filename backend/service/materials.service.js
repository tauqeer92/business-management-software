const Material = require("../models/material.model");

const getAllMaterials = async () => {
  const materials = Material.find()
  return materials
}

const createMaterial = async (input) => {
    return await Material.create(input)
}

module.exports = getAllMaterials, createMaterial;