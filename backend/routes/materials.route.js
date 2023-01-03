const express = require("express");
const MaterialController = require("../controllers/materials.controller");
const router = express.Router();

const materialRoutes = (app) => {
    app.get("/material", MaterialController.Index);
    app.post('/creatematerial', MaterialController.Create);
}
module.exports = materialRoutes;

