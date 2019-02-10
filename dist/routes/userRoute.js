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
            .get(this.userController.getUsers)
            // POST endpoint
            .post(this.userController.addNewUser);
        // User detail
        app.route("/user/:userId")
            // get specific user
            .get(this.userController.getUserWithID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=userRoute.js.map