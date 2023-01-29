const UserController = require("../controllers/users.controller");

const userRoutes = (app) => {
    app.post("/users", UserController.Create);
}

module.exports = userRoutes;