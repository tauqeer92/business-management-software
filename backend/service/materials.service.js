const mongoose = require('mongoose')
const Material = require("../models/material.model");

const createMaterial = async (input) => {
    return await Material.create(input)
}

const getAllMaterials = async () => {
  const materials = Material.find()
  return materials
}

module.exports = { createMaterial, getAllMaterials };