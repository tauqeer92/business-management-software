const MattressController = require("../controllers/mattresses.controller");

const mattressRoutes = (app) => {
    app.get("/mattress", MattressController.Index);
    app.post("/createmattress", MattressController.Create);
    app.patch("/updatemattress", MattressController.Update);
}

module.exports = mattressRoutes;