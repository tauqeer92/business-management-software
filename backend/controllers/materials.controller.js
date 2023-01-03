const express = require('express')
const mongoose = require('mongoose')
const Material = require("../models/material.model");
const createMaterial = require('../service/materials.service')
const getAllMaterials = require("../service/materials.service");

const MaterialController = {
	Index: async (req, res) => {
		const materials = await getAllMaterials()
		res.json({materials})
    },

	Create: async (req, res) => {
		console.log(`This is req ${req.body.name}`)
		const material_data = {name: req.body.name, price: req.body.price, description: req.body.description}
		const material = await createMaterial(material_data)
		res.json({material_data})

    }
}

module.exports = MaterialController