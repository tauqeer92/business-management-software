const express = require("express");
const MaterialController = require("../controllers/materials.controller");
const router = express.Router();

const materialRoutes = (app) => {
    app.get("/material", MaterialController.Index);
    app.post('/creatematerial', MaterialController.Create);
    app.patch('/updatematerial', MaterialController.Update);
}
module.exports = materialRoutes;

