const MattressController = require("../controllers/mattresses.controller");

const mattressRoutes = (app) => {
    app.get("/mattress", MattressController.Index);
    app.post("/createmattress", MattressController.Create);
}

module.exports = mattressRoutes;