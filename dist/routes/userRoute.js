"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
class Routes {
    constructor() {
        this.userController = new userController_1.UserController();
    }
    routes(app) {
        app.route("/")
            .get((req, res) => {
            res.status(200).send({
                message: "Nodemon is watching you *.*"
            });
        });
        // User
        app.route("/user")
            .get((req, res) => {
            // Get all users
            res.status(200).send({
                message: "GET all users successful!"
            });
        })
            // POST endpoint
            .post((req, res) => {
            // Create new user
            res.status(200).send({
                message: "POST request users successful!"
            });
        });
        // User detail
        app.route("/user/:userId")
            // get specific user
            .get((req, res) => {
            // Get a single user detail
            res.status(200).send({
                message: "GET single user successful!"
            });
        })
            .put((req, res) => {
            // Update a user
            res.status(200).send({
                message: "PUT update user successful!"
            });
        })
            .delete((req, res) => {
            // Delete a user
            res.status(200).send({
                message: "DELETE user successful!"
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=userRoute.js.map