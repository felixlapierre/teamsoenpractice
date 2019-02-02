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
                message: "GET request successfulll!!!!"
            });
        });
        app.route("/user")
            .post(this.userController.addNewUser);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=userRoute.js.map